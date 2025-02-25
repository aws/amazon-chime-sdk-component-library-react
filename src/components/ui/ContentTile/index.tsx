// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { createStyledConfig } from '../../../utils/style';
import { VideoTile } from '../../ui/VideoTile';

export const ContentTile = styled(VideoTile).withConfig(
  createStyledConfig(['nameplate'])
)`
  background-color: ${({ theme }) => theme.colors.greys.grey80};
`;

export default ContentTile;
