const path = require('path');
const {
  spawnOrFail,
  process,
  updateJSSdk,
  updateReactSdk,
} = require('./utilities');

// Go to root dir
process.chdir(path.join(__dirname, '..'));
spawnOrFail('npm', ['install']);

const dir = '../amazon-chime-sdk/apps/meeting';
updateJSSdk(dir);
updateReactSdk(dir);