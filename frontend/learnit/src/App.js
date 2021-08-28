import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/dashNav';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignIn from "./SignIn"
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Assignments from './pages/Assignments';
function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />  
          <Route path='/assignments' component={Assignments} />
          <Route path='/calendar' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
