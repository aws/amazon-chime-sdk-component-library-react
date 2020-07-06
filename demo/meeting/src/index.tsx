// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import ReactDOM from 'react-dom';
import React from 'react';

import './style.css';
import App from './app';

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
