#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').spawnSync;
const { logger, spawnOrFail, process } = require('./utilities');

const base = fs
  .readFileSync(path.join(process.cwd(), '.base-branch'), 'utf8')
  .trim();

const commits = spawnOrFail('git', ['rev-list', `${base}..`])
  .toString()
  .trim()
  .split(`\n`)
  .filter(commit => commit !== '');

let commit_files = [];
if (!commits || !commits[0]) {
  logger.log(`OK: branch is equal with ${base}`);
} else if (commits.length === 1) {
  logger.log(`OK: branch contains one commit on top of ${base}`);
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
    logger.error(
      `Error: there are uncommitted changes:\n ${uncommitted_files}`
    );
    return process.exit(1);
  }

  if (commit_files.includes('CHANGELOG.md')) {
    logger.log(`OK: branch contains CHANGELOG.md`);
  } else {
    logger.error(
      `Error: Does not contain CHANGELOG.md in the commit ${commits[0]}`
    );
    return process.exit(1);
  }

  // On every PR do a minor version bump and only run this once (on local) before PR
  if (!process.argv.includes('--publish') && !process.env.GITHUB_ACTIONS) {
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
    logger.log(
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
    spawnOrFail('git', ['add', `${version_file}`]);
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
  logger.log(
    `OK: branch contains empty merge commit followed by one commit on top of ${base}`
  );
} else {
  logger.error(
    `Error: branch contains multiple commits (${commits.join(', ')})`
  );
  return process.exit(1);
}
