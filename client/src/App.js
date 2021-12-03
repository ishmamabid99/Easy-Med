import './App.css';
import React, { useContext, useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from "./pages/Login"
import SignUp from './pages/SignUp';
import LoggdApp from './pages/AfterLogged/LoggdApp';
import Cart from './pages/AfterLogged/Cart';
import OrganizationSignUp from './pages/OrganizationSignUp';
import AuthApi from './AuthApi'
import { checkState } from './methods/getData';
import Cookies from 'js-cookie';
function App() {
  const [auth, setAuth] = useState(undefined);
  async function checkCookies() {

    const token = Cookies.get('access');

    const check = await checkState(token);

    if (!check) {
      setAuth(false);
    }
    else {
      setAuth(true)
    }
  }
  useEffect(() => {
    checkCookies();
  }, [])
  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes />
      </Router>
    </AuthApi.Provider>
  );
}
const Routes = () => {
  const Auth = useContext(AuthApi)
  return (
    <Switch>
      <ProtectedLogin exact path="/" auth={Auth.auth} component={Home} />
      <ProtectedLogin path="/login" auth={Auth.auth} component={Login} />
      <ProtectedLogin path="/signup" auth={Auth.auth} component={SignUp} />
      <ProtectedLogin path="/organization-signup" auth={Auth.auth} component={OrganizationSignUp} />
      <ProtectedRoute path='/app' auth={Auth.auth} component={LoggdApp} />
      <ProtectedRoute path='/cart' auth={Auth.auth} component={Cart} />
    </Switch>
  )
}
const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => auth ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
      }

    />
  )
}
const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => !auth ? (
        <Component {...props} />
      ) : (
        <Redirect to='/app' />
      )
      }

    />
  )
}
export default App;
