import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/dashNav'
import Home from './Home';
import SignUp from '../SignUp';
import SignIn from '../SignUp';
import Subject from '../components/subjectComponent';

const Dashboard = () => {
  return (
    <div className="subject-grid">
      <Link to='/assignments' style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to='/assignments' style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to='/sign-up' style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to='/sign-up' style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to='/sign-up' style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to='/sign-up' style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link >
    </div >
  )
}

export default Dashboard
