import './App.css';
import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from "./pages/Login"
import SignUp from './pages/SignUp';
import OrganizationSignUp from './pages/OrganizationSignUp';
function App() {

  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/organization-signup" component={OrganizationSignUp} />
      </Switch>
    </>
  );
}

export default App;
