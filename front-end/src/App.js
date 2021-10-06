import './App.css';
import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from "./pages/Login"
import SignUp from './pages/SignUp';
import MyAppBar from './components/navbar/MyAppBar';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      <MyAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
