import "./App.css";
// import { useState } from "react";
// import Navbar from "./components/Navbar/dashNav";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AddInfo from "./addInfo";
import Dashboard from "./pages/Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Assignments from "./pages/Assignments";
import Meet from "./pages/Meet";

function App() {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // useEffect(() => {
  //   if (user === null) {
  //     fetch("http://localhost:4000/api/user/get", {
  //       method: "GET",
  //       credentials: "include",
  //       mode: "cors",
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.user) {
  //           localStorage.setItem("user", JSON.stringify(data));
  //           setUser(data);
  //         } else {
  //           localStorage.setItem("user", null);
  //           setUser({});
  //         }
  //       });
  //   }
  // }, []);
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/info" component={AddInfo} />
          <Route
            path="/meet"
            render={(props) => <Meet subject={"subject"} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
