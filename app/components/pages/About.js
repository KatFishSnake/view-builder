import React, { Component } from 'react';
import Link from '../atoms/Link';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link href='/'>Go home </Link>
      </div>
    )
  }
};
