import "./App.css";
// import { useState } from "react";
import Navbar from "./components/Navbar/dashNav";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Assignments from "./pages/Assignments";
import Meet from './pages/Meet';
import CalendarPage from "./pages/CalendarPage";

function App() {
  // const [user, setUser] = useState(true);
  const subject = 'maths'
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
          <Route path='/meet' render={(props) => (
            <Meet subject = {subject} />
          )} />
          <Route path='/calendar' component={CalendarPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
