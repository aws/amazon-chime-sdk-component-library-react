#!/usr/bin/env node

const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');

const {
  currentVersion,
  getLatestNPMJSSdkVersion,
  getMajorVersion,
  isCurrentMajorVersion,
  isPreRelease,
  versionBump,
} = require('./version-utils');
const {
  logger,
  spawnOrFail,
  process,
  shouldContinuePrompt,
  checkWarning,
  updateDependency
} = require('./utilities');

const currentBranch = (spawnOrFail('git', [' branch --show-current'], { skipOutput: true })).trim();

const latestNPMJSSdkVersion = getLatestNPMJSSdkVersion(currentVersion);

const deployDemo = (version) => {
  logger.log('Deploying unique release candidate Meeting Demo URL...');
  // Checkout the meeting demo
  process.chdir(path.join(__dirname, '../..'));

  let demoBranch = 'main';
  if (!isCurrentMajorVersion()) {
    demoBranch = `release-${getMajorVersion(currentVersion)}.x`;
  }

  if (!fs.existsSync('amazon-chime-sdk')) {
    spawnOrFail('git', [`clone --branch ${demoBranch} https://github.com/aws-samples/amazon-chime-sdk.git`]);
  } else {
    spawnOrFail('rm', ['-rf amazon-chime-sdk']);
    spawnOrFail('git', [`clone --branch ${demoBranch} https://github.com/aws-samples/amazon-chime-sdk.git`]);
  }

  // Update the demo to the most up to date version of JS SDK
  process.chdir(path.join(__dirname, '../../amazon-chime-sdk/apps/meeting'));
  updateDependency(`amazon-chime-sdk-js@${latestNPMJSSdkVersion}`);
  process.chdir(path.join(__dirname, '../../amazon-chime-sdk/apps/meeting'));
  updateDependency('amazon-chime-sdk-component-library-react', `../../../amazon-chime-sdk-component-library-react/amazon-chime-sdk-component-library-react-${version}.tgz`);

  process.chdir(path.join(__dirname, '../../amazon-chime-sdk/apps/meeting/serverless'));
  const formattedVersion = version.replace(/\./g, '-');
  spawnOrFail('node', [`./deploy.js -r us-east-1 -b chime-sdk-components-demo-${formattedVersion} -s chime-sdk-components-demo-${formattedVersion}`], { printErr: true });

  process.chdir(path.join(__dirname, '..'));
  spawnOrFail('rm', ['-rf ../amazon-chime-sdk']);
};

const getCurrentRemoteBranch = () => {
  spawnOrFail('git', ['fetch origin'], { skipOutput: true });
  return (spawnOrFail('git', ['for-each-ref --format="%(upstream:short)" "$(git symbolic-ref -q HEAD)"'], { skipOutput: true })).trim();
};

const buildAndPack = () => {
  logger.log('Building package...');
  spawnOrFail('npm', [`run build`]);
  logger.log('Packaging ...');
  spawnOrFail('npm', ['pack'], { printErr: true });
};

const updateJSSdkDep = () => {
  // Update the peer dependency to the most updated version of the SDK
  logger.log(`Installing SDK Version: ${latestNPMJSSdkVersion} as a peerDependency and devDependency of the react library.`);

  let componentsPackageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  componentsPackageJson.peerDependencies['amazon-chime-sdk-js'] = `^${latestNPMJSSdkVersion}`;
  componentsPackageJson.devDependencies['amazon-chime-sdk-js'] = `^${latestNPMJSSdkVersion}`;

  fs.writeFileSync(
    'package.json',
    JSON.stringify(componentsPackageJson, null, 2)
  );

  spawnOrFail('npm', [`install`]);
};

const checkNPMDepsInstall = () => {
  // Creates a new React test app, install component and sdk and build the test app to ensure no peer dependency warnings, errors or build issues
  logger.log('Install amazon-chime-sdk-component-library-react and amazon-chime-sdk-js sdk as dependencies, check if there is peer dependency warning for amazon-chime-sdk-component-library-react');
  process.chdir(path.join(__dirname, '../..'));
  if (!fs.existsSync('dependency-check-app')){
    spawnOrFail('mkdir', ['dependency-check-app']);
  } else {
    spawnOrFail('rm', ['-rf dependency-check-app']);
    spawnOrFail('mkdir', ['dependency-check-app']);
  }
  process.chdir(path.join(__dirname, '../../dependency-check-app'));
  spawnOrFail('npm', ['init -y']);
  spawnOrFail('npm', ['install react react-dom']);
  spawnOrFail('npm', [`install amazon-chime-sdk-js@${latestNPMJSSdkVersion} styled-components styled-system`]);
  checkWarning('npm', [`install -q ../amazon-chime-sdk-component-library-react/amazon-chime-sdk-component-library-react-${currentVersion}.tgz`], null, 'amazon-chime-sdk-component-library-react');
  process.chdir(path.join(__dirname, '..'));
  spawnOrFail('rm', ['-rf ../dependency-check-app']);
}

const cleanUp = (remoteBranch) => {
  logger.warn(`Warning: Resetting HEAD${remoteBranch ? ` to ${remoteBranch}` : ''}.\nAll current staged and local changes will be lost.`);
  shouldContinuePrompt();
  spawnOrFail('git', [`reset --hard ${remoteBranch ? remoteBranch : ''}`]);
  spawnOrFail('git', [' clean -ffxd .']);
};

const release = () => {
  const remoteBranch = getCurrentRemoteBranch();
  if (!remoteBranch || (remoteBranch !== 'origin/main' && !(/^origin\/release-[0-9]+\.x$/).test(remoteBranch))) {
    logger.error(`The local branch ${currentBranch} does not track either main or release-<version>.x branch`);
    process.exit(1);
  }

  cleanUp(remoteBranch);
  updateJSSdkDep();
  buildAndPack();
  checkNPMDepsInstall();

  logger.log(`Do you want to upload these files to release-${currentVersion} branch?\n`);
  shouldContinuePrompt();
  spawnOrFail('git', [`push origin HEAD:release-${currentVersion} -f`]);

  deployDemo(currentVersion);

  // Bump next development version
  versionBump();
};

const hotfix = () => {
  if (isPreRelease(currentVersion)) {
    logger.error(`We currently do not do hotfix for pre-release version.`);
    process.exit(1);
  }
  cleanUp();
  const newVersion = versionBump(1, 'hotfix');
  updateJSSdkDep();
  buildAndPack();
  checkNPMDepsInstall();
  deployDemo(newVersion);
};

const main = () => {
  // Go to root dir
  process.chdir(path.join(__dirname, '..'));

  logger.log('Choose one of the following options:');
  logger.log('  1. Release');
  logger.log('  2. Hotfix');
  logger.log('  3. Deploy demo');
  const option = prompt('');

  switch (option) {
    case '1':
      release();
      break;
    case '2':
      hotfix();
      break;
    case '3':
      const remoteBranch = getCurrentRemoteBranch();
      if (!remoteBranch || (!(remoteBranch.includes('origin/release-')) && (remoteBranch !== 'origin/hotfix'))) {
        logger.error(`The local branch ${currentBranch} does not track either release or hotfix branch`);
        process.exit(1);
      }
      cleanUp(remoteBranch);
      spawnOrFail('npm', ['install']);
      deployDemo(currentVersion);
      break;
    default:
      if (option) {
        logger.error('Invalid option');
      }
      process.exit(1);
  }
};

main();
