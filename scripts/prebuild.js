#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').spawnSync;
const {
  logger,
  spawnOrFail,
  process,
  shouldContinuePrompt,
} = require('./utilities');

const { labels = [], actor = '' } = process.env.GITHUB_CONTEXT || {};
const botName = 'dependabot';

const base = fs
  .readFileSync(path.join(process.cwd(), '.base-branch'), 'utf8')
  .trim();


let commits = [];

if (!process.env.GITHUB_ACTIONS) {
  commits = spawnOrFail('git', ['rev-list', `${base}..`])
    .toString()
    .trim()
    .split('\n')
    .filter(commit => commit !== '');
} else {
  // In the case of a Github action, the github worker will merge all commits into one commit, so we only need to grab the top commit
  commits = spawnOrFail('git', ['rev-parse', `HEAD`])
    .toString()
    .trim()
    .split(`\n`)
    .filter(commit => commit !== '');
}

let commit_files = [];
commit_files = spawnOrFail('git', [
  'diff-tree',
  '--no-commit-id',
  '--name-only',
  '-r',
  `${commits[0]}`,
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

if (
  commit_files.includes('.github/workflows') &&
  !process.env.GITHUB_ACTIONS
) {
  logger.warn(
    "If your github action workflow uses a 'push' or 'pull_request' trigger, have you verified that the github workflow change is safe to execute when the PR is created? Or type yes if this does not apply to you."
  );
  shouldContinuePrompt();
}

if (commit_files.includes('CHANGELOG.md')) {
  logger.log(`OK: branch contains CHANGELOG.md`);
} else if (
  /* 
In case where GitActions dependabot initiates the PR for dependencies update
we can skip CHANGELOG verification.
When bot submits PR two git context parameters are set.
  1) actor: name of the commit author (dependabot)
  2) labels: list of labels for the commit with name parameters (dependencies)
*/
  actor === botName &&
  labels.filter(lbl => lbl.name === 'dependencies').length === 1
) {
  logger.log('Skipping CHANGELOG.md verification.');
} else if (!commit_files.includes('./src')) {
  // Only require a changelog change for changes to the component library
  logger.log('Skipping CHANGELOG.md verification.');
} else {
  logger.error(
    `Error: Does not contain CHANGELOG.md in the commit ${commits[0]}`
  );
  return process.exit(1);
}

if (!process.env.GITHUB_ACTIONS) {
  // Pull in npm audit fixes automatically
  logger.log("Running npm audit fix");
  spawnOrFail('npm', ['audit', 'fix']);
  logger.log("Completed npm audit fix");
  spawnOrFail('git', ['add', 'package.json']);
  spawnOrFail('git', ['add', 'package-lock.json']);
  spawnOrFail('git', ['commit', '--amend', '--no-edit']);
}