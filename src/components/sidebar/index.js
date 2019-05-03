import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
export default class Siderbar extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      path: ''
    }
  }
  componentDidMount () {
  }
  goTo = (path) => {
    this.setState({
      path
    })
    console.log(this.props)
  }
  render () {
    const pathname = window.location.pathname
    const workList = [
      { name: '/work_2019', text: '2019'},
      { name: '/work_2018', text: '2018'},
      { name: '/work_2017', text: '2017'},
      { name: '/work_2016', text: '2016'},
      { name: '/work_2015', text: '2015'},
    ]
    const fashList = [
      { name: '/fashion_2019', text: '2019'},
      { name: '/fashion_2018', text: '2018'},
      { name: '/fashion_2017', text: '2017'},
      { name: '/fashion_2016', text: '2016'},
      { name: '/fashion_2015', text: '2015'},
    ]
    return (
      <div className="sidebar">
        <Link className='sidebar-title' to='/'></Link>
        <div className="container">
          <div className='project'>
            <div className="project-title">PROJECT</div>
            <Link className="project-nam" to='/project_Nam'>Viet Nam</Link>
          </div>
          <div className='project'>
            <div className="project-title">WORKS</div>
            { workList.map(item => {
              return (<Link key={item.name} className={pathname === item.name? 'project-link active': 'project-link'} to={item.name} onClick={this.goTo.bind(this, item.name)}>{item.text}</Link>)
              })
            }
          </div>
          <div className='project'>
            <div className="project-title">FASHION</div>
            { fashList.map(item => {
              return (<Link key={item.name} className={pathname === item.name? 'project-link active': 'project-link'} to={item.name} onClick={this.goTo.bind(this, item.name)}>{item.text}</Link>)
              })
            }
          </div>
          <div className='project'>
            <div className="project-title">INFO</div>
              <Link className="project-link" to='/about'>About</Link>
            </div>
          </div>
      </div>
    )
  }
}