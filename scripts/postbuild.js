#!/usr/bin/env node
// This script runs after npm build to validate that running build has all changed files commited.

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
process.chdir(path.dirname(__dirname));
const uncommittedFiles = spawnOrFail('git', [`status -s`])
  .toString()
  .trim();

if (uncommittedFiles.length === 0) {
  console.log(logColorRef.log, 'OK: no uncommitted files');
} else {
  console.error(
    logColorRef.error,
    `Error: there are uncommitted changes:\n ${uncommittedFiles}`
  );
  process.exit(1);
}
