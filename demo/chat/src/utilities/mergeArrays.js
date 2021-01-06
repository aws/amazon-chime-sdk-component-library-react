// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * Merges two arrays of objects.
 * @param {[]} original Original array data.
 * @param {[]} newdata New array data to be appended to original
 * @param {string} uniqueSelector attribute key to select unique elements.
 */
const mergeArrayOfObjects = (original, newdata, uniqueSelector = '') => {
  newdata.forEach(dat => {
    const foundIndex = original.findIndex(
      ori => ori[uniqueSelector] === dat[uniqueSelector]
    );
    if (foundIndex >= 0) original.splice(foundIndex, 1, dat);
    else original.push(dat);
  });

  return original;
};

export default mergeArrayOfObjects;
