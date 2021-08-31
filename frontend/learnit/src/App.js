import "./App.css";
// import { useState } from "react";
// import Navbar from "./components/Navbar/dashNav";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AddInfo from "./addInfo";
import Dashboard from "./pages/Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Assignments from "./pages/Assignments";
import Meet from "./pages/Meet";
import CalendarPage from "./pages/CalendarPage";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    if (user === null) {
      fetch("http://localhost:4000/api/user/get", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
          } else {
            localStorage.setItem("user", null);
            setUser(null);
          }
        });
    }
  }, []);
  console.log("user", user);
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home}>
            <Home user={user} />
          </Route>
          <Route path="/assignments">
            {user ? <Assignments user={user} /> : <Redirect to="/sign-up" />}
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            {user ? <Dashboard user={user} /> : <Redirect to="/sign-up" />}
          </Route>
          <Route path="/info">
            <AddInfo user={user} />
          </Route>
          <Route path="/meet">
            {user ? (
              <Meet subject={"subject"} user={user} />
            ) : (
              <Redirect to="/sign-up" />
            )}
          </Route>
          <Route path="/calendar" component={CalendarPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
