#!/usr/bin/env node

const prompt = require('prompt-sync')();
const { logger, spawnOrFail, process, shouldContinuePrompt } = require('./utilities');
const fs = require('fs');
const path = require('path');
const util = require('util');

logger.warn(`
    Warning: are you sure to reset the HEAD to origin/master?
    Current staged and local changes will be lost!\n`);
shouldContinuePrompt();

//  Go to root dir
process.chdir(path.join(__dirname, '..'));

let package_json = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const originalVersion = package_json['version'];
const version = originalVersion.split('.').map(x => parseInt(x));

logger.log(`
Choose one of the following bumping version options:
    1. Patch
    2. Minor
    3. Major
    4. Manual`);
const userInput = prompt('');
// Get required selection.
if (!userInput || !['1', '2', '3', '4'].includes(userInput)) {
  logger.error('Exiting...', 'You must make selection to proceed!');
  process.exit(1);
}
let versionString = '';
switch (userInput) {
  case '1':
    version[2] += 1;
    versionString = version.join('.');
    break;
  case '2':
    version[1] += 1;
    version[2] = 0;
    versionString = version.join('.');
    break;
  case '3':
    version[0] += 1;
    version[1] = 0;
    version[2] = 0;
    versionString = version.join('.');
    break;
  case '4':
    versionString = prompt(
      util.format(
        // Color prompt
        '\x1b[34m%s\x1b[0m',
        'Specify the version in Semantic Versioning format:'
      )
    )
      .toString()
      .trim();
    break;
  default:
    process.exit(1);
}

package_json['version'] = versionString;
const versionFile = 'src/versioning/Versioning.ts';
const changeLog = 'CHANGELOG.md';
const tag = `amazon-chime-sdk-component-library-react@${versionString}`;
logger.warn(`
    Warning: you are bumping the version
    `);
logger.log(
  `        From: ${util.format('\x1b[32m%s\x1b[0m', originalVersion)} `
);
logger.log(
  `        
            To:   ${util.format('\x1b[31m%s\x1b[0m', versionString)} `
);

shouldContinuePrompt();

logger.log('Reseting HEAD to origin/master');
spawnOrFail('git', ['fetch origin']);
spawnOrFail('git', ['reset --hard origin/master']);
spawnOrFail('git', [' clean -ffxd .']);


logger.log(`Updating ${versionFile} with ${versionString}`);

// Update version number in Versions file.
fs.writeFileSync(
  versionFile,
  fs
    .readFileSync(versionFile)
    .toString()
    .replace(/return '[.0-9]+';/, `return '${versionString}';`)
);

logger.log(`Updating CHANGELOG.md with a new release entry - ${versionString}`);
// Update CHANGELOG.md with release version
fs.writeFileSync(
  changeLog,
  fs
    .readFileSync(changeLog)
    .toString()
    .replace(
      /\[Unreleased\]/,
      `[${versionString}] - ${new Date().toISOString().slice(0, 10)}`
    )
);
spawnOrFail('npm', [`version ${versionString} --no-git-tag-version`]);
logger.log(`Updated package.json version to ${versionString}`);

spawnOrFail('git', ['add -A']);
spawnOrFail('git', [`commit -m 'Publish ${tag}'`]);
logger.log(`Created commit called: "Publish ${tag}"`);

logger.log(`Running build:publish script`);
spawnOrFail('npm', [`run build:publish`]);
logger.log(`Running npm pack --dry-run, this can take a few minutes`);
spawnOrFail('npm', ['pack --dry-run']);

logger.warn(`
    Do you want to upload these files?
`);

shouldContinuePrompt();

spawnOrFail('git', ['push origin HEAD:release -f']);
