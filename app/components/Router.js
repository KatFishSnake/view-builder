import React from 'react'
import SimpleReactRouter from 'simple-react-router'

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFound from './NotFound';

export default class Router extends SimpleReactRouter {
  routes(map){
    map('/',                   HomePage)
    map('/about',              AboutPage)
    map('/:path*',             NotFound) // catchall route
  }
};
