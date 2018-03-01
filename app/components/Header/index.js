import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
          <div className='menu_item my_dropdown'>
            <span>培训课程</span>
            <ul>
              <Link to='/sdf'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
              <Link to='#'><li>1</li></Link>
            </ul>
          </div>
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