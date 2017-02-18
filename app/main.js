import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// Necessary wrapper component for HMR

import Router from './components/Router';

const renderer = (Component) => {
  render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderer(Router);

// HMR activation
if (module.hot) {
  module.hot.accept('./components/Router', () => {
    renderer(Router)
  });
}
