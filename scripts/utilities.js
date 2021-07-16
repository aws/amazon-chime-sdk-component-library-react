// Helper modules for commont functions.

const fs = require('fs');
const path = require('path');
const exec = require('child_process').spawnSync;
const process = require('process');
const util = require('util');
const prompt = require('prompt-sync')();
const YES = 'yes';

const logger = {
  error: (output, info = '') =>
    console.error('\x1b[31m%s\x1b[0m', output, info), // Red
  log: output => console.log('\x1b[36m%s\x1b[0m', output), // Teal
  warn: output => console.warn('\x1b[33m%s\x1b[0m', output) // Yellow
};

const spawnOrFail = (command, args, options) => {
  options = {
    ...options,
    shell: true
  };
  const cmd = exec(command, args, options);
  if (cmd.error) {
    logger.log(`Command ${command} failed with ${cmd.error.code}`);

    process.exit(255);
  }
  const output = cmd.stdout.toString();
  logger.log(output);
  if (cmd.status !== 0) {
    logger.log(
      `Command ${command} failed with exit code ${cmd.status} signal ${cmd.signal}`
    );
    logger.log(cmd.stderr.toString());
    process.exit(cmd.status);
  }
  return output;
};

// automatically catch peer dependency warnings and error out
const checkWarning = (command, args, options, dependency) => {
  options = {
    ...options,
    shell: true
  };
  const cmd = exec(command, args, options);
  if (cmd.stderr.toString().match(`npm WARN ${dependency}`)) {
    logger.log(`Command ${command} failed with incompatible peer dependency for ${dependency}`);
  
      process.exit(255);
  }
  if (cmd.error) {
    logger.log(`Command ${command} failed with ${cmd.error.code}`);

    process.exit(255);
  }
  const output = cmd.stdout.toString();
  logger.log(output);
  if (cmd.status !== 0) {
    logger.log(
      `Command ${command} failed with exit code ${cmd.status} signal ${cmd.signal}`
    );
    logger.log(cmd.stderr.toString());
    process.exit(cmd.status);
  }
  return output;
};

// Will prompt user for input before continue
// Exptected input 'yes' to continue
// Optinal callback(): instead of terminating process will run passed cb.
function shouldContinuePrompt(callback = null) {
  const answer = prompt(
    `Type '${util.format('\x1b[32m%s\x1b[0m', YES)}' to continue `
  );

  if (!answer || answer.trim().toLowerCase() !== YES) {
    logger.log('Exiting...');
    if (callback) {
      callback();
    } else {
      process.exit(1);
    }
  }
}

// Udpate the meeting demo to the most up to date version of the SDK
const updateJSSdk = (args) => {
  const updatedSdkVersion = spawnOrFail('npm', [`show amazon-chime-sdk-js version`]).trim();
  logger.log(`Installing SDK Version: ${updatedSdkVersion} into the meeting demo.`);
  process.chdir(path.join(__dirname, args));
  spawnOrFail('npm', [`install amazon-chime-sdk-js@${updatedSdkVersion}`]);
};

// Pack the latest version of React library and install it in meeting demo
const updateReactSdk = (args, versionString, directory) => {
  // Get the version of the tar file
  if (!versionString) {
    process.chdir(path.join(__dirname, '..'));
    let package_json = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    versionString = package_json['version'];
    console.log(`The current version of React library is ${versionString}`);
  }

  // Pack the latest version of React library and install it in meeting demo
  process.chdir(path.join(__dirname, '..'));
  spawnOrFail('npm', ['install']);
  spawnOrFail('npm', ['run build']);
  spawnOrFail('npm', ['pack']);
  process.chdir(path.join(__dirname, args));
  spawnOrFail('npm', [`install ../../../${directory ? directory : ''}amazon-chime-sdk-component-library-react-${versionString}.tgz`]);
};

module.exports = {
  logger,
  spawnOrFail,
  process,
  shouldContinuePrompt,
  checkWarning,
  updateJSSdk,
  updateReactSdk,
};
