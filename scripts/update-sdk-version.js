const path = require('path');
const fs = require('fs');

const { currentVersion }  = require('./version-utils');

const {
  logger,
  process,
  packDependency,
  updateDependency
} = require('./utilities');

process.chdir(path.join(__dirname, '../amazon-chime-sdk/apps/meeting'));

// Remove package-lock to avoid running into fsevents bad platform issue.
// https://github.com/fsevents/fsevents/issues/336
// We use Node 16 and it is not stable which breaks the package installation.
fs.rmSync('./package-lock.json');

logger.log(`The current version of React library is ${currentVersion}`);

// Pack the latest version of React library and install it in meeting demo
process.chdir(path.join(__dirname, '..'));
packDependency();
process.chdir(path.join(__dirname, '../amazon-chime-sdk/apps/meeting'));
updateDependency('amazon-chime-sdk-component-library-react', `../../../amazon-chime-sdk-component-library-react-${currentVersion}.tgz`);