import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/homeNavbar'
import SignUp from '../SignUp';
import SignIn from '../SignUp';

const Home = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
      Home
    </>
  )
}

export default Home
