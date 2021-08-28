import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import Assignment from '../components/assignmentComponent';

const Assignments = () => {
  return (
    <div className="assignment-container">
      <div className="pending">
        Pending
        <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div>
      </div>
      <div className="completed">
        Completed
        <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div>
      </div>
    </div>
  )
}

export default Assignments
