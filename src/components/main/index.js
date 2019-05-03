import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Content from '../content'
import Admin from '../admin'
export default class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/admin" exact component={Admin}/>
        <Route path="/"  component={Content}/>
      </Switch>
    )
  }
}