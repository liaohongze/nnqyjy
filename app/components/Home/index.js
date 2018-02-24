import React, { Component } from 'react'
import Banner from '../Banner'
import './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Banner />
      </div>
    )
  }
}