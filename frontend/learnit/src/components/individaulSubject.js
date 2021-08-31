import React from 'react'
import assignmentComponent from './assignmentComponent'
import SubjectComponent from './subjectComponent'
import WeeklyTests from './weeklyTests'

const individaulSubject = () => {
  return (
    <div className="main">
      <div className="left-side">
        <div className="subject-about">
          <SubjectComponent />
        </div>
        <div className="weekly-test">
          Test Schedule
          <div className="test-wrap">
            <WeeklyTests />
          </div>
          <div className="test-wrap">
            <WeeklyTests />
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="chat-section">
          
        </div>
      </div>
    </div>
  )
}

export default individaulSubject
