// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export default class Versioning {
  /**
   * Return string representation of SDK name
   */
  static get sdkName(): string {
    return 'amazon-chime-sdk-component-library';
  }

  /**
   * Return string representation of SDK version
   */
  static get sdkVersion(): string {
    return '0.1.7';
  }
}
