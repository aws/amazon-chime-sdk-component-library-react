#!/usr/bin/env node

const fs = require('fs');
const process = require('process');
const path = require('path');
const exec = require('child_process').spawnSync;
const logColorRef = {
  error: '\x1b[31m%s\x1b[0m',
  log: '\x1b[36m%s\x1b[0m'
};

function spawnOrFail(command, args, options) {
  options = {
    ...options,
    shell: true
  };
  const cmd = exec(command, args, options);
  if (cmd.error) {
    console.log(
      logColorRef.log,
      `Command ${command} failed with ${cmd.error.code}`
    );
    process.exit(255);
  }
  const output = cmd.stdout.toString();
  console.log(logColorRef.log, output);
  if (cmd.status !== 0) {
    console.log(
      logColorRef.log,
      `Command ${command} failed with exit code ${cmd.status} signal ${cmd.signal}`
    );
    console.log(logColorRef.log, cmd.stderr.toString());
    process.exit(cmd.status);
  }
  return output;
}

const gitActionsProps = {
  refBranch: process.env.GITHUB_HEAD_REF, // your branch
  eventName: process.env.GITHUB_EVENT_NAME // pull_request or push
};

const GithubEvents = ['pull_request', 'push'];

const base = fs
  .readFileSync(path.join(process.cwd(), '.base-branch'), 'utf8')
  .trim();
// We need to setup first within GitActions env.
if (GithubEvents.includes(gitActionsProps.eventName)) {
  spawnOrFail('git', ['fetch']);
  spawnOrFail('git', ['checkout', `origin/${gitActionsProps.refBranch}`]);
}
const commits = spawnOrFail('git', ['rev-list', `${base}..`])
  .toString()
  .trim()
  .split(`\n`);

let commit_files = [];
if (!commits) {
  console.log(logColorRef.log, `OK: branch is equal with ${base}`);
} else if (commits.length === 1) {
  console.log(
    logColorRef.log,
    `OK: branch contains one commit on top of ${base}`
  );
  commit_files = spawnOrFail('git', [
    'diff-tree',
    '--no-commit-id',
    '--name-only',
    '-r',
    `${commits[0]}`
  ])
    .toString()
    .trim()
    .split(`\n`);

  const uncommitted_files = spawnOrFail('git', ['status', '-s'])
    .toString()
    .trim();

  if (uncommitted_files.length !== 0) {
    console.error(
      logColorRef.error,
      `Error: there are uncommitted changes:\n ${uncommitted_files}`
    );
    return process.exit(1);
  }

  if (commit_files.includes('CHANGELOG.md')) {
    console.log(logColorRef.log, `OK: branch contains CHANGELOG.md`);
  } else {
    console.error(
      logColorRef.error,
      `Error: Does not contain CHANGELOG.md in the commit ${commits[0]}`
    );
    return process.exit(1);
  }

  if (process.argv.includes('--publish')) {
    const version_file = 'src/versioning/Versioning.ts';

    // Reset to the base version
    const base_version = JSON.parse(
      spawnOrFail('git', ['show', `${base}:package.json`])
    ).version;

    let package_json = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    package_json['version'] = base_version;
    fs.writeFileSync('package.json', JSON.stringify(package_json, null, 2));

    // Increase to new version
    spawnOrFail('npm version patch --no-git-tag-version');
    package_json = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    const new_version = package_json['version'];
    console.log(
      logColorRef.log,
      `Increasing patch version from ${base_version} to ${new_version}`
    );
    fs.writeFileSync(
      version_file,
      fs
        .readFileSync(version_file)
        .toString()
        .replace(/return '[.0-9]+';/, `return '${new_version}';`)
    );
    // Pull in npm audit fixes automatically
    spawnOrFail('npm', ['audit', 'fix']);
    spawnOrFail('git', ['add'`${version_file}`]);
    spawnOrFail('git', ['add', 'package.json']);
    spawnOrFail('git', ['add', 'package-lock.json']);
    spawnOrFail('git', ['commit', '--amend', '--no-edit']);
  }
} else if (
  commits.length === 2 &&
  spawnOrFail('git', ['diff', `${commits[0]} ${commits[1]}`])
    .toString()
    .trim() === ''
) {
  console.log(
    logColorRef.log,
    `OK: branch contains empty merge commit followed by one commit on top of ${base}`
  );
} else {
  console.error(
    logColorRef.error,
    `Error: branch contains multiple commits (${commits.join(', ')})`
  );
  return process.exit(1);
}
