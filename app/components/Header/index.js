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
          <Link to='/' className='menu_item'>首页</Link>
          <Link to='/aboutus' className='menu_item'>机构简介</Link>
          <DropdownButton
            bsStyle='default'
            title='培训课程'
            id='train'
          >
            <MenuItem eventKey='1'><em className='menu_flag flag1' />越南语</MenuItem>
            <MenuItem eventKey='2'><em className='menu_flag flag2' />泰语</MenuItem>
            <MenuItem eventKey='3'><em className='menu_flag flag3' />柬埔寨语</MenuItem>
            <MenuItem eventKey='4'><em className='menu_flag flag4' />英语</MenuItem>
            <MenuItem eventKey='5'><em className='menu_flag flag5' />日语</MenuItem>
            <MenuItem eventKey='6'><em className='menu_flag flag6' />韩语</MenuItem>
            <MenuItem eventKey='7'><em className='menu_flag flag7' />缅甸语</MenuItem>
            <MenuItem eventKey='8'><em className='menu_flag flag8' />老挝语</MenuItem>
            <MenuItem eventKey='9'><em className='menu_flag flag9' />印尼语</MenuItem>
            <MenuItem eventKey='10'><em className='menu_flag flag10' />法语</MenuItem>
          </DropdownButton>

          <Link to='/translate' className='menu_item'>商务翻译</Link>
          <Link to='/teachers' className='menu_item'>教师风采</Link>
          <Link to='/overseas' className='menu_item'>留学签证</Link>
          <Link to='/news' className='menu_item'>新闻资讯</Link>
          <Link to='/course' className='menu_item'>外语课堂</Link>
          <Link to='/contact' className='menu_item'>联系我们</Link>
        </div>
        <div className='header_logo' style={{width: headerHeight * 1.6}} />
      </div>
    )
  }
}