import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import DashboardPage from './DashboardPage'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/dashboard' component={DashboardPage}/>
    </Switch>
  </main>
)

export default Main
