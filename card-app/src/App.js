import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Logout from "./components/Logout/Logout";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
