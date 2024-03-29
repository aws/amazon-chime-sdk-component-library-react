#!/usr/bin/env node
/*
  This scripts validates files for:
    Correct copyright and licencing message presents in files
    Each test file has corresponding source file.
    Checks for use of console.log() within source files.
    README.MD and NOTICE have valid footer copyright.
*/
const fs = require('fs');
const { logger, process } = require('./utilities');
const exec = require('child_process').execSync;
let exitCode = 0;

const gitIgnoreMemo = {};
const isGitIgnored = (file) => {
  if (file in gitIgnoreMemo) {
    return gitIgnoreMemo[file];
  }
  try {
    // If this returns zero, it means the file is ignored by git; skip it.
    exec(`git check-ignore -q '${file}'`);
    gitIgnoreMemo[file] = true;
    return true;
  } catch (e) {
    // It's tracked by git.
    gitIgnoreMemo[file] = false;
    return false;
  }
};

let walk = function(dir) {
  let results = [];
  if (dir.includes('.DS_Store')) {
    return results;
  }
  let list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    let stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
};

let failed = function(file, reason, description) {
  logger.error(file, reason);
  if (description) {
    logger.warn(description);
  }
  exitCode = 1;
};

let tests = function() {
  return walk('tst')
    .filter(file => file.endsWith('.test.ts') || file.endsWith('test.tsx'))
    .sort();
};

let allFiles = function() {
  const srcFiles = walk('src').filter(
    file => file.endsWith('.ts') || file.endsWith('.tsx')
  );

  return srcFiles.concat(tests());
};

tests().forEach(file => {
  if (
    file.includes(`snapshots`) ||
    file.includes(`utils`)
  ) {
    return;
  }
  const fileText = fs.readFileSync(file, 'utf-8').toString();
  if (fileText.includes('not.equal.null')) {
    failed(
      file,
      'contains not.equal.null',
      'Avoid using not.equal.null and convert it to assert.exists'
    );
  }

  const srcFile = file.replace(/^tst/, 'src').replace('.test.ts', '.ts');
  if (!fs.existsSync(srcFile)) {
    const errorString =
      'Ensure that a test file has a corresponding source file.';
    failed(
      file,
      'does not have a corresponding source file',
      errorString +
        `\nFor example, the test file (${file}) should test the corresponding source file (${srcFile})`
    );
  }
});

const spdx = '// SPDX-License-Identifier: Apache-2.0';

allFiles().forEach(file => {
  if (file.endsWith('.d.ts') || isGitIgnored(file)) {
    return;
  }

  const copyright = `// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.`;
  const fileLines = fs
    .readFileSync(file)
    .toString()
    .split('\n');

  if (fileLines[0].trim() !== copyright) {
    failed(
      `${file}:1`,
      'header does not include correct copyright',
      `Ensure that header contains the following copyright: ${copyright}`
    );
  }
  if (fileLines[1].trim() !== spdx) {
    failed(
      `${file}:1`,
      'header does not include correct SPDX license code',
      `Ensure that header contains the following copyright: ${spdx}`
    );
  }

  if (fileLines[2] && fileLines[2].trim() !== '') {
    failed(
      `${file}:3`,
      'copyright file header is not followed by blank line',
      'Ensure that header is followed by a blank line'
    );
  }

  // Check source files for console.log() and skip check for non-prod code.
  for (let i = 0; i < fileLines.length; i++) {
    if (
      file.includes('tst/') ||
      file.includes('.stories.') ||
      file.includes('providers/') ||
      file.includes('hooks/')
    )
      break;
    const pos = `${file}:${i + 1}`;
    if (fileLines[i].includes('console.log')) {
      failed(
        pos,
        'contains console.log',
        'Ensure that source does not contain console.log'
      );
    }
  }
});

const footerCopyright = `\nCopyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n`;

for (const file of ['README.md', 'NOTICE']) {
  if (
    !fs
      .readFileSync(file)
      .toString()
      .endsWith(footerCopyright)
  ) {
    failed(
      file,
      `Ensure that ${file} ends with the following copyright: ${footerCopyright}`
    );
  }
}

process.exit(exitCode);
