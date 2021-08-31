import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Navbar from '../components/Navbar/dashNav'
// import Home from './Home';
// import SignUp from '../SignUp';
// import SignIn from '../SignUp';
import Subject from "../components/subjectComponent";

const Dashboard = (props) => {
  const [classroom, setClassroom] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/classroom/get", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClassroom(data.classroom);
        console.log(data);
      });
  }, []);
  return (
    <div className="subject-grid">
      {classroom.map((subject) => {
        return (
          <Link
            to="/assignments"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="subject-wrap">
              <Subject subject={subject} />
            </div>
          </Link>
        );
      })}

      <Link
        to="/assignments"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      {/* <Link to="/sign-up" style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to="/sign-up" style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to="/sign-up" style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link>
      <Link to="/sign-up" style={{ textDecoration: "none", color: "black" }}>
        <div className="subject-wrap">
          <Subject />
        </div>
      </Link> */}
    </div>
  );
};

export default Dashboard;
