import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import './Header.scss'

export default class Header extends Component {
  state = {
    headerHeight: 83
  }

  componentDidMount() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  }

  resizeWindow = () => {
    this.setState({
      headerHeight: document.getElementById('banner-user').offsetHeight * 0.15
    })
  }

  render() {
    const {headerHeight} = this.state
    return (
      <div className='header' style={{height: headerHeight}}>
        <ul className='contact'>
          <li><i className='iconfont icon-dianhua' />0771-3924246</li>
          <li><i className='iconfont icon-msnui-tel' />18587962889</li>
          <li><i className='iconfont icon-qq' />0771-3924246</li>
        </ul>
        <div className='menu'>
          <Link to='/'>首页</Link>
          <Link to='/aboutus'>机构简介</Link>
          <DropdownButton
            bsStyle='default'
            title='培训课程'
            id='menu_dropdown'
          >
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3' active>
        Active Item
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
          </DropdownButton>
        </div>
        <div className='header_logo' style={{width: headerHeight * 1.6}} />
      </div>
    )
  }
}