import ReactDOM from 'react-dom';
import React from 'react';

import App from './app';

ReactDOM.render(
  <App/>,
  document.querySelector('#container')
);

const anyModule = module as any;
if (anyModule.hot) {
  anyModule.hot.accept();
}
