import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import './NavBar.scss'

export default class NavBar extends Component {
  render() {
    return (
      <Navbar className='menu' collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            南宁全银教育
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={`/`}><NavItem eventKey={1}>首页</NavItem></LinkContainer>
            <LinkContainer to={`/aboutus`}><NavItem eventKey={2}>机构简介</NavItem></LinkContainer>
            <NavDropdown eventKey={3} title='培训课程' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>越南语</MenuItem>
              <MenuItem eventKey={3.2}>泰语</MenuItem>
              <MenuItem eventKey={3.3}>柬埔寨语</MenuItem>
              <MenuItem eventKey={3.4}>英语</MenuItem>
              <MenuItem eventKey={3.5}>日语</MenuItem>
              <MenuItem eventKey={3.6}>韩语</MenuItem>
              <MenuItem eventKey={3.7}>缅甸语</MenuItem>
              <MenuItem eventKey={3.8}>老挝语</MenuItem>
              <MenuItem eventKey={3.9}>印尼</MenuItem>
              <MenuItem eventKey={3.10}>法语</MenuItem>
            </NavDropdown>
            <LinkContainer to={`/translate`}><NavItem eventKey={4}>商务翻译</NavItem></LinkContainer>
            <LinkContainer to={`/overse`}><NavItem eventKey={5}>留学签证</NavItem></LinkContainer>
            <LinkContainer to={`/news`}><NavItem eventKey={6}>新闻资讯</NavItem></LinkContainer>
            <LinkContainer to={`/course`}><NavItem eventKey={7}>外语课堂</NavItem></LinkContainer>
            <LinkContainer to={`/contact`}><NavItem eventKey={8}>联系我们</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}