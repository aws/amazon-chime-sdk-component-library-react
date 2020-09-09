// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { PrimaryButton, Flex, Label } from 'amazon-chime-sdk-component-library-react';
import { useHistory } from 'react-router-dom';

import routes from '../constants/routes';

const AppCheckerSubmit: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleAppCheck = () => {
      setIsLoading(true);
      history.push(routes.CHECKER_DETAIL);
  };

  return (
    <Flex pt="2rem" container alignItems="center" flexDirection="column">
      <PrimaryButton
        label={isLoading ? 'Loading...' : 'Check readiness'}
        onClick={handleAppCheck} />
      <Label style={{ margin: '.75rem 0 0 0' }}>
        This will check whether your devices are able to reach the Amazon Chime SDK services.
      </Label>
    </Flex>
  );
}

export default AppCheckerSubmit;
