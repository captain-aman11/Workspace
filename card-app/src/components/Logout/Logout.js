import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem(sessionStorage.getItem(user));
    window.location = "/";
  }
  render() {
    return null;
  }
}
export default Logout;