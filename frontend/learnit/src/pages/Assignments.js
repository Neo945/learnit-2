import React, { useEffect } from "react";
// import { AppBar, Tabs, Tab } from "@material-ui/core";
// import { TabPanel } from "@material-ui/lab";
import Assignment from "../components/assignmentComponent";

const Assignments = (props) => {
  const [rem, setRem] = React.useState([]);
  const [comp, setComp] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/ass/rem", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRem(data.assignment);
        console.log(data);
      });
    fetch("http://localhost:4000/api/ass/sub", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComp(data.totalresponse);
        console.log(data);
      });
  }, []);
  return (
    <div className="assignment-container">
      <div className="pending">
        Pending
        {rem.map((assignment) => {
          return (
            <div className="wrap">
              <Assignment assignment={assignment} />
            </div>
          );
        })}
        {/* <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div>
        <div className="wrap">
          <Assignment />
        </div> */}
      </div>
      <div className="completed">
        Completed
        {comp.map((assignment) => {
          return (
            <div className="wrap">
              <Assignment assignment={assignment} />
            </div>
          );
        })}
        {/* <div className="wrap">
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
        </div> */}
      </div>
    </div>
  );
};

export default Assignments;
