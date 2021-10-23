import React, { Component } from "react";
import axios from "../../../utils/axios";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      message: ""
    };
  }

  handleChangeText = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleResetForm = (e) => {
    e.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("auth/login", this.state.form)
      .then((response) => {
        // console.log(response.data.data.token);
        // console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        this.props.history.push("/basic-react");
      })
      .catch((error) => {
        this.setState({
          isError: true,
          message: error.response.data.message
        });
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({
            isError: false,
            message: ""
          });
        }, 2000);
      });
  };
  render() {
    return (
      <>
        <div className="container text-center">
          <h2>Login Page</h2>
          <hr />
          {this.state.isError && <div className="alert alert-danger">{this.state.message}</div>}
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Write your email..."
              name="email"
              onChange={this.handleChangeText}
            />
            <br />
            <input
              type="password"
              placeholder="Write your password..."
              name="password"
              onChange={this.handleChangeText}
            />
            <br />
            <button type="reset" className="btn btn-outline-dark" onClick={this.handleResetForm}>
              Reset
            </button>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
