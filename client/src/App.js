import React from 'react'

import { Container } from '@material-ui/core'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import PostDetails from './components/PostDetails'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Router>
      <Container maxwidth='xl'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() => <Redirect to='/posts' />} />
          <Route path='/posts' exact component={Home} />
          <Route path='/posts/search' exact component={Home} />
          <Route path='/posts/:id' component={PostDetails} />
          <Route
            path='/auth'
            exact
            component={() => (!user ? <Auth /> : <Redirect to='/posts' />)}
          />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
