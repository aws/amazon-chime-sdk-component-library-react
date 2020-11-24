// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import configureAmplify from './services/servicesCongig';

// Call services configuration
configureAmplify();

document.addEventListener('DOMContentLoaded', _event => {
  ReactDOM.render(<Chat />, document.getElementById('root'));
});
