// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import ReactDOM from 'react-dom';
import React from 'react';

import './style.css';
import App from './app';

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
