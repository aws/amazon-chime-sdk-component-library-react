/*
    Verdaccio app script
    This script will create a test directory outside of the (this) package and will use 
    verdaccio applicatoin as locally hosted NPM repository to test 
    publishing to NPM, consume from NPM as dependency within our demo application 
    to verify that our latest published version is ready to be published.
*/
const {
  logger,
  spawnOrFail,
  process,
  shouldContinuePrompt
} = require('./utilities');
const path = require('path');
const cp = require('child_process');
const fs = require('fs');
const PORT = 4873;
const endpoint = `http://localhost:${PORT}`;
const verdaccioAppDir = path.join(__dirname, '../../verdaccio_app');
const comonentsTestDir = './test-chime-sdk-components';
const COMPONENTS_APP_NAME = 'amazon-chime-sdk-component-library-react';
const applicationProcesses = [];

const cleanupBeforeExit = () => {
  logger.log('Terminating processes...');
  applicationProcesses.map(prs => {
    spawnOrFail('kill', [`kill -9`, `${prs.pid}`]);
  });
  cleanup();
  process.exit(0);
};

process.on('SIGTERM', cleanupBeforeExit);
process.on('SIGINT', cleanupBeforeExit);

// Create verdaccio testing directory and cd in to it
if (!fs.existsSync(verdaccioAppDir)) {
  logger.log(`Creating directory: ${verdaccioAppDir}`);
  fs.mkdirSync(verdaccioAppDir);
}

//  Go to verdaccio dir
process.chdir(verdaccioAppDir);
// Initiate basic node package
spawnOrFail('npm', ['init', '-f', '-y']);

// Install verdaccio within new package
spawnOrFail('npm', ['i', 'verdaccio']);

generateVerdaccioConfigFile();

// Start verdaccio application
try {
  startVerdaccioApp();
} catch (e) {
  logger.warn(
    'Failed to start verdaccio, Will attempted to find and end existing instance of the app...'
  );
  spawnOrFail('ps', [
    `-ef | grep verdaccio | grep -v grep | awk '{ print $2 }' | xargs kill -9`
  ]);
  startVerdaccioApp();
}

// Make SDK test directory
if (!fs.existsSync(comonentsTestDir)) {
  logger.log(`Creating SDK testing directory: ${comonentsTestDir}`);
  fs.mkdirSync(comonentsTestDir);
}
process.chdir(comonentsTestDir);

// Clone SDK from github
logger.log(`Cloning ${COMPONENTS_APP_NAME} in to testing directory.`);

//Clean up
spawnOrFail('rm', ['-rf', `${COMPONENTS_APP_NAME}`]);
spawnOrFail('git', [
  'clone',
  'git@github.com:aws/amazon-chime-sdk-component-library-react.git'
]);
// navigate in to cloned SDK
process.chdir(path.join(`./${COMPONENTS_APP_NAME}`));

logger.log('Installing dependencies...');
spawnOrFail('npm', ['install']);
logger.log('Building...');
spawnOrFail('npm', ['run', 'build']);

// Cleanup package before publishing new
logger.log('Unpublishing any existing packages from local registry.');
spawnOrFail('npm', [`unpublish`, '--registry', `${endpoint}`, '--force']);
logger.log('Publishing package to local registry.');
spawnOrFail('npm', [`publish`, '--registry', `${endpoint}`]);

// Run demo
process.chdir('./demo/meeting');
logger.log('Preparing to run a meeting demo application');
let webpackConfig = fs.readFileSync('webpack.config.js', 'utf-8');
// Remove aliases from webconfig and save
fs.writeFileSync(
  'webpack.config.js',
  webpackConfig.replace(/alias:(.){\/?(.|\s|\S)*?}/, '')
);

//  Install SDK components package from local repo.
logger.log(`Installing ${COMPONENTS_APP_NAME} from local repo...`);
spawnOrFail('npm', [`install ${COMPONENTS_APP_NAME} --registry ${endpoint}`]);

const demoAppClientProcess = cp.exec('npm run start', {
  detached: true
});
applicationProcesses.push(demoAppClientProcess);

logger.log(`
    Starting demo app.
    App runnig on: https://0.0.0.0:9000/

    Once application is loaded verify that its working properly.
    `);

logger.warn(
  `Have you verified demo application and ready to continue with RELEASE?`
);
shouldContinuePrompt();
process.exit(0)

function startVerdaccioApp() {
  // Start verdaccio with config from above.
  const verdaccioProcess = cp.exec(
    `${verdaccioAppDir}/node_modules/verdaccio/bin/verdaccio -c config.yaml`,
    {
      detached: true
    }
  );
  logger.log(`Verdaccio repo started!\n`);

  applicationProcesses.push(verdaccioProcess);
}

function generateVerdaccioConfigFile() {
  // Create Verdaccio config file
  fs.writeFileSync(
    'config.yaml',
    `
#
# This is the default config file. It allows all users to do anything,
# so don't use it on production systems.
#
# Look here for more config file examples:
# https://github.com/verdaccio/verdaccio/tree/master/conf
#
# path to a directory with all packages
storage: ./storage
# a list of other known repositories we can talk to
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
packages:
  '@*/*':
    # scoped packages
    access: $all
    proxy: npmjs
  '**':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all
    # allow all known users to publish packages
    publish: $all
    proxy: npmjs
`,
    function(err) {
      if (err) throw err;
      logger.log('config file is generated successfully.');
    }
  );
}

function cleanup() {
    spawnOrFail('ps', [
        `-ef | grep -E '(webpack|verdaccio)' | grep -v grep | awk '{ print $2 }' | xargs kill -9`
    ]);
}
