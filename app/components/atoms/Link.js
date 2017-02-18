import React, { Component } from 'react'
import { Link } from 'simple-react-router'

export default class extends Component {
  render(){
    return <Link
      {...this.props}
      className={`Link ${this.props.className||''}`}
    />
  }
}
