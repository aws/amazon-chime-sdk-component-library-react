#!/usr/bin/env node

const prompt = require('prompt-sync')();
const { logger, spawnOrFail, process, shouldContinuePrompt } = require('./utilities');
const fs = require('fs');
const path = require('path');
const util = require('util');

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
    4. Manual
    5. Hotfix.`);
const userInput = prompt('');
if (!userInput || !['1', '2', '3', '4', '5'].includes(userInput)) {
  logger.error('Exiting...', 'You must make selection to proceed!');
  process.exit(1);
}
let versionString = '';
switch (userInput) {
  case '1':
  case '5':
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
const release_option = userInput;

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

spawnOrFail('git', ['fetch origin']);
if (release_option !== '5') {
  logger.warn(`
    Warning: are you sure to reset the HEAD to origin/master?
    Current staged and local changes will be lost!\n`);
  shouldContinuePrompt();
  logger.log('Reseting HEAD to origin/master');
  spawnOrFail('git', ['reset --hard origin/master']);
}
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

// Skip updating peer dependencies for hotfix
if (release_option !== '5') {
  // Update the peer dependency to the most updated version of the SDK
  const updatedSdkVersion = spawnOrFail('npm', [`show amazon-chime-sdk-js version`]).trim();

  logger.log(`Installing SDK Version: ${updatedSdkVersion} into the meeting demo, chat demo, and as a peerDependency and devDependency of the react library.`);

  let componentsPackageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  componentsPackageJson.peerDependencies['amazon-chime-sdk-js'] = `^${updatedSdkVersion}`;
  componentsPackageJson.devDependencies['amazon-chime-sdk-js'] = `^${updatedSdkVersion}`;

  fs.writeFileSync(
    'package.json',
    JSON.stringify(componentsPackageJson, null, 2)
  );

  logger.log("NPM Installing component library...")
  spawnOrFail('npm', [`install`]);

  // Udpate meeting demo to the most up to date version of the SDK
  process.chdir(path.join(__dirname, '../demo/meeting'));
  spawnOrFail('npm', [`install amazon-chime-sdk-js@${updatedSdkVersion}`]);

  // Update the chat demo to the most up to date version of the SDK
  process.chdir(path.join(__dirname, '../demo/chat'));
  spawnOrFail('npm', [`install amazon-chime-sdk-js@${updatedSdkVersion}`]);
  process.chdir(path.join(__dirname, '..'));
}

spawnOrFail('git', ['add -A']);
spawnOrFail('git', [`commit -m 'Publish ${tag}'`]);
logger.log(`Created commit called: "Publish ${tag}"`);

logger.log(`Running build:publish script`);
spawnOrFail('npm', [`run build:publish`]);

logger.warn(`
    Do you want to upload these files?
`);

shouldContinuePrompt();

// Creates a new React test app, install the component app as dependency and build the test app to ensure no errors or build issues
process.chdir(path.join(__dirname, '..'));
spawnOrFail('yalc', ['publish']);
process.chdir(path.join(__dirname, '../..'));
spawnOrFail('npx', ['create-react-app dependency-check-app']);
process.chdir(path.join(__dirname, '../../dependency-check-app'));
spawnOrFail('yalc', ['add amazon-chime-sdk-component-library-react']);
spawnOrFail('npm', [`install amazon-chime-sdk-js@${updatedSdkVersion}`]);
spawnOrFail('npm', ['install --save styled-components styled-system']);
spawnOrFail('npm', ['run build']);
process.chdir(path.join(__dirname, '../..'));
spawnOrFail('rm', ['-rf dependency-check-app']);

if (release_option === '5') {
  spawnOrFail('git', ['push origin HEAD:hotfix -f']);
} else {
  spawnOrFail('git', ['push origin HEAD:release -f']);
}
process.chdir(path.join(__dirname, '../demo/meeting/serverless'));
logger.log("Deploying unique release candidate Meeting Demo URL...");
const formattedVersion = versionString.replace(/\./g, "-");
spawnOrFail('node', [`./deploy.js -r us-east-1 -b chime-sdk-components-demo-${formattedVersion} -s chime-sdk-components-demo-${formattedVersion}`]);
