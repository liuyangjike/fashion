import React from 'react'
import axios from 'axios'
import './admin.css'
import Upload from './upload'

export default class Admin extends React.Component{
  constructor () {
    super()
    this.state = {
      user: '',
      project: [
        {type: 'project', year: 'Nam', list: []},
      ],
      work: [
        {type: 'work', year: '2019', list: []},
        {type: 'work', year: '2018', list: []},
        {type: 'work', year: '2017', list: []},
        {type: 'work', year: '2016', list: []},
        {type: 'work', year: '2015', list: []},
      ],
      fashion: [
        {type: 'fashion', year: '2019', list: []},
        {type: 'fashion', year: '2018', list: []},
        {type: 'fashion', year: '2017', list: []},
        {type: 'fashion', year: '2016', list: []},
        {type: 'fashion', year: '2015', list: []},
      ]
    }
  }
  initData = () => {
    axios.get('/fashion').then(({ data }) => {
      const { work, fashion, project } = this.state
      work.forEach(item => {
        item.list = data.filter(o => o.type === 'work' && o.year === item.year)
      })

      fashion.forEach(item => {
        item.list = data.filter(o => o.type === 'fashion' && o.year === item.year)
      })

      project.forEach(item => {
        item.list = data.filter(o => o.type === 'project' && o.year === item.year)
      })
      this.setState({
        work,
        fashion
      })
    })
  }
  componentDidMount () {
    var user = sessionStorage.getItem('user')
    this.setState({user})
    this.initData()
  }
  handleDelImg = (name) => {
    axios.post('/delete', {name}).then(res => {
      this.initData()
    })
  }
  changeInput = (e) => {
    let value = e.target.value
    this.setState({
      user: e.target.value
    })
    if (value === '12345678') {
      sessionStorage.setItem('user', value)
    }
  }
  upload = (result) => {
    axios.post('/fashion', result).then(res => {
      this.initData()
    })
  }
  render () {
    const { work, fashion, project, user } = this.state
    if (user !== '12345678') {
      return (
        <div className="login">
          密码: <input type="text" onChange={this.changeInput} value={this.state.user}/>
        </div>
      )
    }
    return (
      <div className="admin">
      <h1 className="main-title">PROJECT</h1>
      {
        project.map(item => {
          return (
            <React.Fragment key={item.year}>
              <h3>{item.year}</h3>
              <div className="img-container">
                {
                  item.list.map((item, index) => {
                    return (
                      <div key={index} className="image">
                        <img className="mini-img" src={item.url} key={index} alt=""/>
                        <div className="del-img" onClick={this.handleDelImg.bind(this, item.name)} ></div>
                      </div>
                    )
                  })
                }
                <Upload onSend={this.upload} type={item.type} year={item.year}/>
              </div>
            </React.Fragment>
          )
        })
      }
      <hr/>
        <h1 className="main-title">WORKS</h1>
        {
          work.map(item => {
            return (
              <React.Fragment key={item.year}>
                <h3>{item.year}</h3>
                <div className="img-container">
                  {
                    item.list.map((item, index) => {
                      return (
                        <div key={index} className="image">
                          <img className="mini-img" src={item.url} key={index} alt=""/>
                          <div className="del-img" onClick={this.handleDelImg.bind(this, item.name)} ></div>
                        </div>
                      )
                    })
                  }
                  <Upload onSend={this.upload} type={item.type} year={item.year}/>
                </div>
              </React.Fragment>
            )
          })
        }
      <hr/>

        <h1 className="main-title">FASHION</h1>
        {
          fashion.map(item => {
            return (
              <React.Fragment key={item.year}>
                <h3>{item.year}</h3>
                <div className="img-container">
                  {
                    item.list.map((item, index) => {
                      return (
                        <div key={index} className="image">
                          <img className="mini-img" src={item.url} key={index} alt=""/>
                          <div className="del-img" onClick={this.handleDelImg.bind(this, item.name)} ></div>
                        </div>
                      )
                    })
                  }
                  <Upload onSend={this.upload} type={item.type} year={item.year}/>
                </div>
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}