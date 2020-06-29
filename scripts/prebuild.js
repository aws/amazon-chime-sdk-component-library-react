#!/usr/bin/env node

const fs = require('fs');
const process = require('process');
const path = require('path');
const exec = require('child_process').execSync;

function verbose(command) {
  exec(command, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

const base = fs.readFileSync(path.join(process.cwd(), '.base-branch'), 'utf8').trim();

// console.log(`Is GITHUB_ACTIONS: ${GITHUB_ACTIONS}`);
const commits = exec(`git rev-list HEAD ^${base}`).toString().trim().split(`\n`);
console.log(`Commits: ${commits}`);
let commit_files = [];

if (!commits) {
  console.log(`OK: branch is equal with ${base}`);
} else if (commits.length === 1) {
  console.log(`OK: branch contains one commit on top of ${base}`);
  commit_files = exec(`git diff-tree --no-commit-id --name-only -r ${commits[0]}`)
    .toString()
    .trim()
    .split(`\n`);
  const uncommitted_files = exec(`git status -s`).toString().trim();

  if (uncommitted_files.length !== 0) {
    console.error(`Error: there are uncommitted changes:\n ${uncommitted_files}`);
    return process.exit(1);
  }

  if (commit_files.includes('CHANGELOG.md')) {
    console.log(`OK: branch contains CHANGELOG.md`);
  } else {
    console.error(`Error: Does not contain CHANGELOG.md in the commit ${commits[0]}`);
    return process.exit(1);
  }

    if (process.argv.includes('--publish')) {
    const version_file = 'src/versioning/Versioning.ts';

    // Reset to the base version
    const base_version = JSON.parse(exec(`git show ${base}:package.json`)).version;

    let package_json = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    package_json['version'] = base_version;
    fs.writeFileSync('package.json', JSON.stringify(package_json, null, 2));

    // Increase to new version
    verbose('npm version patch --no-git-tag-version');
    package_json = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    const new_version = package_json['version'];
    console.log(`Increasing patch version from ${base_version} to ${new_version}`);
    fs.writeFileSync(
      version_file,
      fs
        .readFileSync(version_file)
        .toString()
        .replace(/return '[.0-9]+';/, `return '${new_version}';`)
    );
    // Pull in npm audit fixes automatically
    verbose('npm audit fix');
    verbose(`git add ${version_file}`);
    verbose('git add package.json');
    verbose('git add package-lock.json');
    verbose('git commit --amend --no-edit');
  }
} else if (commits.length === 2 && exec(`git diff ${commits[0]} ${commits[1]}`).toString().trim() === '') {
  console.log(`OK: branch contains empty merge commit followed by one commit on top of ${base}`);
} else {
  console.error(`Error: branch contains multiple commits (${commits.join(', ')})`);
  return process.exit(1);
}
