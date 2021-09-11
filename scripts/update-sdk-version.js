const path = require('path');
const fs = require('fs');
const {
  logger,
  process,
  packDependency,
  updateDependency
} = require('./utilities');

// Install the latest version of JS SDK
process.chdir(path.join(__dirname, '../amazon-chime-sdk/apps/meeting'));

// Remove package-lock to avoid running into fsevents bad platform issue.
// https://github.com/fsevents/fsevents/issues/336
// We use Node 16 and it is not stable which breaks the package installation.
fs.rmSync('./package-lock.json');
updateDependency('amazon-chime-sdk-js');

// Get the version of the React library tar file
process.chdir(path.join(__dirname, '..'));
let package_json = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
versionString = package_json['version'];
logger.log(`The current version of React library is ${versionString}`);

// Pack the latest version of React library and install it in meeting demo
packDependency();
process.chdir(path.join(__dirname, '../amazon-chime-sdk/apps/meeting'));
updateDependency('amazon-chime-sdk-component-library-react', `../../../amazon-chime-sdk-component-library-react-${versionString}.tgz`);