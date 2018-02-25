import React, {Component} from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import './Banner.scss'
const BgElement = Element.BgElement

export default class Banner extends Component {
  state = {
    bannerHeight: 580
  }

  componentDidMount() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  }

  resizeWindow = () => {
    this.setState({
      bannerHeight: document.body.offsetWidth * 580 / 1280
    })
  }

  render() {
    const { bannerHeight } = this.state

    return (
      <BannerAnim
        prefixCls='banner-user'
        id='banner-user'
        style={{height: bannerHeight, fontSize: bannerHeight * 0.06}}
      >
        <Element
          prefixCls='banner-user-elem'
          key='0'
        >
          <BgElement
            key='bg'
            className='bg bg1'
          />
          <TweenOne
            className='banner-user-title'
            animation={{ y: 30, opacity: 0, type: 'from' }}
          >
            全银带你看世界
          </TweenOne>
          <TweenOne
            className='banner-user-text'
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            小语种、商业翻译、出国留学、签证
          </TweenOne>
        </Element>
        <Element
          prefixCls='banner-user-elem'
          key='1'
        >
          <BgElement
            key='bg'
            className='bg bg2'
          />
          <TweenOne
            className='banner-user-title'
            animation={{ y: 30, opacity: 0, type: 'from' }}
          >
            南宁全银教育
          </TweenOne>
          <TweenOne
            className='banner-user-text'
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            更专业、更便捷的外语培训
          </TweenOne>
        </Element>
      </BannerAnim>
    )
  }
}