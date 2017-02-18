import React, { Component } from 'react';
import Link from '../atoms/Link';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link href='/about'>About</Link>
      </div>
    )
  }
};
