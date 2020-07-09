#!/usr/bin/env node
// This script runs after npm build to validate that running build has all changed files commited.

const path = require('path');
const { logger, spawnOrFail, process } = require('./utilities');

process.chdir(path.dirname(__dirname));
const uncommittedFiles = spawnOrFail('git', [`status -s`])
  .toString()
  .trim();

if (uncommittedFiles.length === 0) {
  logger.log('OK: no uncommitted files');
} else {
  logger.error(`Error: there are uncommitted changes:\n ${uncommittedFiles}`);
  process.exit(1);
}
