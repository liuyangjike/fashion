import React from 'react'
import './content.css'

import axios from 'axios'

const homeList = [
  {
    url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mrsdlpb8j20et0m8aml.jpg',
  }
]

const proList = [
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mrd058xij20f20m8k60.jpg',},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msjz3itcj20f20m8n8d.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msojc7h2j20f20m8ww0.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msoj3im7j20f20m8tn2.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msojf7kwj20w60m87wh.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msokgb2yj20f20m8aul.jpg',},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msoj4c5aj20f20m8gy0.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msoj9ythj20f20m87lx.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2n803g6obj20f20m8zwy.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msojhshgj20w60m81kx.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msojlysej20w60m8e81.jpg'},
  { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2msoja80nj20f20m819b.jpg' }
]

const workList = {
  2019: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mswy9ismj20xc0m8ndx.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mswyaki7j20xc0m8ww4.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mswyd66oj20xc0m87nh.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mswy6m7pj20xc0m847t.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mswycpn2j20sh0m8wwy.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mswy8kxyj20xc0m84c0.jpg' },
  ],
  2018: [
    {url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mt3w19ckj20et0m84b1.jpg' },
    {url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mt3vzgbjj20et0m8tey.jpg' },
    {url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mt3vzeysj20et0m8grm.jpg' },
    {url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mt3w25sij20et0m8qhq.jpg' },
    {url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mt3w3pvdj20en0m819r.jpg' },
    {url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mt3w57tqj20f30m87k1.jpg' },
    {url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mt3w25g0j20et0m8wm9.jpg' },
  ],
  2017: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8lg04j20f90m84cn.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8jajdj20f90m8tks.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8c1tbj20f90m813e.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8do6xj20f90m8k2t.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8f1hfj20f90m8tmf.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8szxpj20f90m8trf.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8dk4yj20f90m80z0.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8xb9jj20f90m8nbu.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8cupjj20fm0m8tgz.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8hb0oj20et0m87gc.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8hw7xj20et0m8qcu.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8kfyvj20et0m8n6f.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mtf8kcxoj20et0m8wqy.jpg' },
  ],
  2016: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu0t4m5pj20id0m8gsr.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu0t5melj20id0m8tfj.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu0t5m99j20id0m8qap.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu0t5jrij20id0m87av.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu0t69ohj20id0m8tgm.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu0t5zc5j20ci0godky.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu0tax4bj20ci0gojvc.jpg' },
  ],
  2015: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4f2c22j20et0m8qct.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2naci6fhzj20et0m87h3.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4f6eonj20et0m8alz.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4f3uj7j20et0m8n8e.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4f3v9wj20et0m844u.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4f8ortj20et0m8n3e.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4fbc4pj20et0m8ag9.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4fe7vwj20et0m8ajt.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4fasdij20et0m87ay.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu4fj1hcj20et0m8wmi.jpg' },
  ]
}
const fashList = {
  2019: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu71g8psj20go0m844x.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu71712xj20go0m8grw.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu7183zrj20go0m8k1y.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mu718776j20et0m8qbj.jpg' },
  ],
  2018: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua69yqyj20g30m87ca.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua65lkfj20g30m8gx6.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua66ynzj20g30m8qbp.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua65yahj20g30m8qbg.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua6byadj20g30m8wnl.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua6f3yvj20hd0m8qfi.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua6bkfcj20hd0m8am7.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua6byhtj20hd0m8dq0.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua6c27bj20et0m87dy.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mua6euhjj20et0m8k1h.jpg' },
  ],
  2017: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudknbzwj20hd0m8n2a.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudkoey8j20hd0m8dnv.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudko1xoj20hd0m8n2g.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudko8gwj20hd0m8ady.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudko2msj20hd0m8jv7.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudko8r5j20hd0m8jvq.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudkrf6gj20hm0m8wld.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudkt6y0j20hm0m87c1.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2mudksnp7j20hm0m8q9v.jpg' },
  ],
  2016: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muo1dk4dj20b40gogoz.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muo1f8qfj20b40goaf1.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muo1gklnj20b40gotc0.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muo1ftb7j20b40gojy2.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muo1fjqgj20b40go431.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muo1eybyj20b40gotdg.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muo1jbtwj20b40gowhh.jpg' },
  ],
  2015: [
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muqbuaejj20m80etq9e.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muqbw0khj20m80ggtgo.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muqbvhqij20m80etq9t.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muqbw2enj20m80ggn32.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muqbwtksj20m80ettfe.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muqbxuecj20ih0m8aho.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1gy1g2muqbyx7nj20g00m87au.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2n7gg57pdj20m80etgsh.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2n7gg93uyj20m80et44k.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2n7gg85npj20m80ettfn.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2n7gg8m6mj20m80etjxo.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2n7gg88dpj20m80etjw6.jpg' },
    { url: 'http://ww1.sinaimg.cn/large/b44313e1ly1g2n7gghe0cj20m80etjwx.jpg' },
  ]
}
export default class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      cursor: 'auto',
      data: [],
      imgList: []
    }
  }

  getPoint = (event) => {
    event = event || window.event   //为了兼容
    var touchEvent = event
    // pageX 和 pageY 分别是触点相对HTML文档左边沿的X坐标和触点相对HTML文档上边沿的Y坐标。只读属性。 
    //当存在滚动的偏移时，pageX包含了水平滚动的偏移，pageY包含了垂直滚动的偏移。
    var x = touchEvent.screenX
    var y = (touchEvent.pageY || touchEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop)
    return {x, y}
  }
  
  judgeDirection = (event) => {
    return this.getPoint(event).x >= window.innerWidth / 2 ? 1 : -1
  }

  goNext = ({index, max}, event) => {
    let direction = this.judgeDirection(event, index)
    let moveWidth = this[`img${index}`].clientWidth + 10
    if (moveWidth > window.innerWidth / 2) {
      moveWidth =  7 * moveWidth / 18
    }
    let targetX = window.scrollX + moveWidth * direction
    this.scrollToX({scrollTargetX : targetX })
  }

  mouseOver = (event) => {
    let direction = this.judgeDirection(event)
    const cursor = this.state.cursor
    const target = direction > 0? 'e-resize': 'w-resize'
    target !== cursor && this.setState({
      cursor: target
    })
  }

  scrollToX = ({
    scrollTargetX = 0,
    speed = 150,
    easing = 'linear',
    endCallback = () => {}
  } = {}) => {
  let scrollX = window.scrollY || document.documentElement.scrollLeft
  let currentTime = 0
  let time = Math.max(0.1, Math.min(Math.abs(scrollX - scrollTargetX) / speed, 0.8))
  let easingEquations = {
    easeOutSine: (pos) => Math.sin(pos * (Math.PI / 2)),
    easeInOutSine: (pos) => (-0.5 * (Math.cos(Math.PI * pos) - 1)),
    linear: (pos) => (pos),
    easeInOutQuint: (pos) => {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 5)
        }
        return 0.5 * (Math.pow((pos - 2), 5) + 2)
      }
    }
    function tick() {
      currentTime += 1 / 60

      let p = currentTime / time
      let t = easingEquations[easing](p)
      if (p < 1) {
        requestAnimationFrame(tick)
        window.scrollTo(scrollX + ((scrollTargetX - scrollX) * t), 0)
      } else {
        window.scrollTo(scrollTargetX, 0)
        endCallback()
      }
    }
    tick()
  }

  initData = () => {
    axios.get('/fashion').then(({data}) => {
      this.setState({
        data
      })
    })
  }

  componentDidMount () {
    this.initData()
  }

  getImgList = () => {
    const { data } = this.state
    let imgList = []
    let pathname = this.props.location.pathname
    let pathList = pathname.split('_')
    pathname = pathList.length > 1? pathList[0] : pathname
    let second = pathList.length > 1? pathList[1] : ''
    if (pathname === '/') {
      imgList = homeList
    } else {
      imgList = data.filter(o => o.type === pathname.slice(1) && o.year === second)
      console.log(imgList, data, pathname.slice(1), second)
    }
    return imgList
  }
  render () {
    const imgList = this.getImgList()
    let pathname = this.props.location.pathname
    let { cursor } = this.state
    if (imgList.length < 3) {
      cursor = 'auto'
    }
    const winHeight = window.innerHeight
    if (pathname === '/about') {
      return (
        <div className="about">
          <div className="title">Photographer</div>
          <div className='about-content'>
            <div>Email: TyroneGONG@163.com</div>
            <div>Instagram: TyroneGONG</div>
            <div>WeChat: TyroneGONG</div>
            <div>Weibo: weibo.com/TyroneGONG</div>
          </div>
        </div>
      )
    }
    
    return (
      <div className="content" onMouseMove={this.mouseOver} >
        {
          imgList.map((item, index) => {
            return (
              <img onClick={this.goNext.bind(this, {index, max: imgList.length})} style={{height: winHeight, cursor }} ref={e => this[`img${index}`] = e } src={item.url} className='content-img' key={index} alt=""/>
            )
          })
        }
      </div>
    )
  }
}