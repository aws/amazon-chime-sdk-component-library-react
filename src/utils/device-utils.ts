// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export const isOptionActive = (
  meetingManagerDeviceId: string | null,
  currentDeviceId: string
): boolean => {
  return currentDeviceId === meetingManagerDeviceId;
};

export function isPrevNextUndefined<T>(prev: T, next: T): boolean {
  const isPrevUndefined = prev === undefined;
  const isNextUndefined = next === undefined;
  return isPrevUndefined && isNextUndefined;
}

export function isPrevNextEmpty<T>(prev: T, next: T): boolean {
  const isPrevEmpty = prev && Object.keys(prev).length === 0;
  const isNextEmpty = next && Object.keys(next).length === 0;
  return isPrevEmpty && isNextEmpty;
}
