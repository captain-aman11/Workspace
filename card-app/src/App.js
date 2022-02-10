import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Logout from "./components/Logout/Logout";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
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
