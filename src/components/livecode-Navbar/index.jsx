import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: props.name
    };
  }

  handleLogout = () => {
    this.props.history.push("/basic-login");
  };

  render() {
    return (
      <>
        <Link to="/basic-react">Basic React</Link> | <Link to="/basic-home">Home</Link> |
        <Link to="/basic-login">Login</Link> | <button onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
}

export default withRouter(Navbar);
