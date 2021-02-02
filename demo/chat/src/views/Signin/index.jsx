/* eslint-disable import/no-unresolved */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Heading, Grid, Cell } from 'amazon-chime-sdk-component-library-react';
import { useTheme } from 'styled-components';
import Login from '../../containers/login/Login';
import { useAuthContext } from '../../providers/AuthProvider';

const Signin = () => {
  const { userSignIn, userSignUp } = useAuthContext();
  const currentTheme = useTheme();

  return (
    <Grid
      gridTemplateRows="3rem 100%"
      gridTemplateAreas='
      "heading"
      "main"      
      '
    >
      <Cell gridArea="heading">
        <Heading
          level={1}
          style={{
            backgroundColor: currentTheme.colors.greys.grey60,
            height: '3rem',
          }}
          className="app-heading"
        >
          Chat App
        </Heading>
      </Cell>
      <Cell gridArea="main">
        <Login register={userSignUp} login={userSignIn} />
      </Cell>
    </Grid>
  );
};

export default Signin;
