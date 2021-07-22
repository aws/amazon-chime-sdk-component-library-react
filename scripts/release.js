#!/usr/bin/env node

const prompt = require('prompt-sync')();
const {
  logger,
  spawnOrFail,
  process,
  shouldContinuePrompt,
  checkWarning,
  packDependency,
  updateDependency
} = require('./utilities');
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

const updatedSdkVersion = spawnOrFail('npm', [`show amazon-chime-sdk-js version`]).trim();

// Skip updating peer dependencies for hotfix
if (release_option !== '5') {
  // Update the peer dependency to the most updated version of the SDK
  logger.log(`Installing SDK Version: ${updatedSdkVersion} as a peerDependency and devDependency of the react library.`);

  let componentsPackageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  componentsPackageJson.peerDependencies['amazon-chime-sdk-js'] = `^${updatedSdkVersion}`;
  componentsPackageJson.devDependencies['amazon-chime-sdk-js'] = `^${updatedSdkVersion}`;

  fs.writeFileSync(
    'package.json',
    JSON.stringify(componentsPackageJson, null, 2)
  );

  logger.log("NPM Installing component library...")
  spawnOrFail('npm', [`install`]);

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

// Creates a new React test app, install component and sdk and build the test app to ensure no peer dependency warnings, errors or build issues
logger.log('Create a new npm package and install amazon-chime-sdk-component-library-react and amazon-chime-sdk-js sdk as dependencies, check if there is peer dependency warning for amazon-chime-sdk-component-library-react');
process.chdir(path.join(__dirname, '..'));
packDependency();
if (!fs.existsSync('dependency-check-app')){
  spawnOrFail('mkdir', ['dependency-check-app']);
} else {
  spawnOrFail('rm', ['-rf dependency-check-app']);
  spawnOrFail('mkdir', ['dependency-check-app']);
}
process.chdir(path.join(__dirname, '../dependency-check-app'));
spawnOrFail('npm', ['init -y']);
spawnOrFail('npm', ['install react react-dom']);
spawnOrFail('npm', [`install amazon-chime-sdk-js@${updatedSdkVersion} styled-components styled-system`]);
checkWarning('npm', [`install -q ../amazon-chime-sdk-component-library-react-${versionString}.tgz`], null, 'amazon-chime-sdk-component-library-react');
process.chdir(path.join(__dirname, '..'));
spawnOrFail('rm', ['-rf dependency-check-app']);
spawnOrFail('rm', [`-rf amazon-chime-sdk-component-library-react-${versionString}.tgz`]);

if (release_option === '5') {
  spawnOrFail('git', ['push origin HEAD:hotfix -f']);
} else {
  spawnOrFail('git', ['push origin HEAD:release -f']);
}

// Checkout the meeting demo
process.chdir(path.join(__dirname, '../..'));
if (!fs.existsSync('amazon-chime-sdk')) {
  spawnOrFail('git', ['clone https://github.com/aws-samples/amazon-chime-sdk.git']);
} else {
  spawnOrFail('rm', ['-rf amazon-chime-sdk']);
  spawnOrFail('git', ['clone https://github.com/aws-samples/amazon-chime-sdk.git']);
}

// Udpate the demo to the most up to date version of JS SDK 
process.chdir(path.join(__dirname, '../../amazon-chime-sdk/apps/meeting'));
updateDependency(`amazon-chime-sdk-js@${updatedSdkVersion}`);
// Udpate the demo to the most up to date version of React library
process.chdir(path.join(__dirname, '..'));
packDependency();
process.chdir(path.join(__dirname, '../../amazon-chime-sdk/apps/meeting'));
updateDependency('amazon-chime-sdk-component-library-react', `../../../amazon-chime-sdk-component-library-react/amazon-chime-sdk-component-library-react-${versionString}.tgz`);

process.chdir(path.join(__dirname, '../../amazon-chime-sdk/apps/meeting/serverless'));
logger.log('Deploying unique release candidate Meeting Demo URL...');
const formattedVersion = versionString.replace(/\./g, '-');
spawnOrFail('node', [`./deploy.js -r us-east-1 -b chime-sdk-components-demo-${formattedVersion} -s chime-sdk-components-demo-${formattedVersion}`]);

process.chdir(path.join(__dirname, '..'));
spawnOrFail('rm', [`-rf amazon-chime-sdk-component-library-react-${versionString}.tgz`]);
process.chdir(path.join(__dirname, '../..'));
spawnOrFail('rm', ['-rf amazon-chime-sdk']);