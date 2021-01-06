// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { hexTorgba, isValidCSSHex } from '../../src/utils/style';

describe('isValidCSSHex', () => {
  it('returns false when a string is not prefixed with a "#" character', () => {
    expect(isValidCSSHex('333333')).toBe(false);
  });

  it('returns true when a string is not prefixed with a "#" character', () => {
    expect(isValidCSSHex('#333333')).toBe(true);
  });

  it('returns true when the string contains 6 alphanumeric characters ranging from a-f and 0-9', () => {
    expect(isValidCSSHex('#abc123')).toBe(true);
  });

  it('returns false when the string contains less than 6 alphanumeric characters ranging from a-f and 0-9', () => {
    expect(isValidCSSHex('#abc12')).toBe(false);
  });

  it('returns false when the string contains characters outside of the a-f range', () => {
    expect(isValidCSSHex('#abg123')).toBe(false);
  });
});

describe('hexTorgba', () => {
  it('returns an rgba formatted version of the hex input when it is valid', () => {
    expect(hexTorgba('#333333')).toEqual('rgba(51, 51, 51, 1)');
  });

  it('returns false when the input hex is not valid', () => {
    expect(hexTorgba('333333')).toBe('');
  });

  it('includes the alpha value in the output if specified', () => {
    expect(hexTorgba('#333333', 0.4)).toEqual('rgba(51, 51, 51, 0.4)');
  });

  it('provides a default value of "1" if the alpha argument is not specified', () => {
    expect(hexTorgba('#333333')).toEqual('rgba(51, 51, 51, 1)');
  });
});
