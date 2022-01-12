#!/usr/bin/env node

const { spawnOrFail } = require('../../scripts/utilities.js');

const currentVersion = require('../../package.json').version;

const latestNPMVersion = spawnOrFail('npm', [`show amazon-chime-sdk-component-library-react@latest version`], { skipOutput: true }).trim();

// Only need to deploy storybook if the current branch version is the same as the latest NPM version
if (latestNPMVersion.split('.')[0] === currentVersion.split('.')[0]) {
  console.log(`Deploy storybook as branch major version ${currentVersion} matches latest NPM major version ${latestNPMVersion}`);
} else {
  console.log(`Skip deploy storybook as branch major version ${currentVersion} does not match latest NPM major version ${latestNPMVersion}`);
}

