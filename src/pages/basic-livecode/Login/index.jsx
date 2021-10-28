import React, { Component } from "react";
import axios from "../../../utils/axios";
import { connect } from "react-redux";
import { login } from "../../../store-livecode/actions/auth";
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
    this.props.login(this.state.form).then((response) => {
      // REDUX //
      // console.log(this.props.auth);
      // console.log(response.value.data.data.token);
      const token = response.value.data.data.token;
      localStorage.setItem("token", token);
      this.props.history.push("/basic-home");
    });
  };
  render() {
    const { isError, message } = this.props.auth;
    return (
      <>
        <div className="container text-center">
          <h2>Login Page</h2>
          <hr />
          {isError && <div className="alert alert-danger">{message}</div>}
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
              {isError ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
