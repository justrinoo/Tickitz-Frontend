import React, { Component } from "react";
import "./index.css";
import LogoTickitz from "../../../assets/img/tickitz.png";
import BannerLogin from "../../../assets/img/bg-login.png";
import TickitzMobile from "../../../assets/img/Logo.svg";
import GoogleIcon from "../../../assets/img/Google-icon.svg";
import FacebookIcon from "../../../assets/img/Facebook-icon.svg";
import { Link } from "react-router-dom";
import axios from "../../../utils/axios";
import { Toast } from "react-bootstrap";
import { GetUser } from "../../../store/actions/user";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form_input: {
        email: "",
        password: ""
      },
      users: [],
      isError: false,
      message: ""
    };
  }

  handleInputForm = (event) => {
    this.setState({
      form_input: {
        ...this.state.form_input,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post("auth/login", this.state.form_input)
      .then((response) => {
        this.props.GetUser().then((response) => {
          localStorage.setItem("role", response.value.data.data[0].role);
          if (response.value.data.data[0].role === "admin") {
            this.props.history.push("/admin/dashboard");
          }
        });
        const token = response.data.data.token;
        const userId = response.data.data.id;
        localStorage.setItem("user_id", userId);
        localStorage.setItem("token", token);
        this.props.history.push("/");
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
    // console.log(this.state.message);
    return (
      <>
        {/* <!-- Welcome Ticktiz --> */}
        <section className="banner__tickitz">
          <div className="banner__tickitz-image-container">
            <div className="banner__tickitz-overlay">
              <div className="banner__tickitz-overlay-parent">
                <img
                  src={LogoTickitz}
                  className="banner__tickitz-overlay-image img-fluid"
                  alt="tickitz"
                />
                <h2 className="banner_tickitz-title">wait, watch, wow!</h2>
              </div>
            </div>
            <img src={BannerLogin} className="banner__tickitz-image" alt="Banner tickitz" />
          </div>
          {/* Form Login */}
          <div className="form__parent">
            <img src={TickitzMobile} className="mb-5 d-block d-md-none" alt="Tickitz" />
            {this.state.isError && (
              <>
                <Toast
                  className="bg-danger position-absolute text-white"
                  style={{ bottom: "0px", right: "0px" }}
                >
                  <Toast.Header closeButton={false}>
                    <strong className="me-auto">From: Tickitz</strong>
                  </Toast.Header>
                  <Toast.Body>{this.state.message}</Toast.Body>
                </Toast>
              </>
            )}
            <h1 className="form__child__title">Sign In</h1>
            <p className="form__child__desc">
              Sign in with your data that you entered during your registration
            </p>
            <form onSubmit={this.handleSubmitForm} method="POST">
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="input__form-login"
                  id="email"
                  name="email"
                  onChange={this.handleInputForm}
                  placeholder="Write your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="input__form-login"
                  id="password"
                  name="password"
                  onChange={this.handleInputForm}
                  placeholder="Write your password"
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="button__signin">
                  Sign In
                </button>
                <div className="d-flex justify-content-center mt-4 forget-password__header">
                  <p>Forgot your password? &nbsp;</p>
                  <Link to="/forgot-password" className="forgot-password__title">
                    Reset Now
                  </Link>
                </div>
              </div>
            </form>

            <div className="banner__tickitz-break">
              <hr />
              <p>Or</p>
              <hr />
            </div>
            <div className="banner__ticktiz-authentication">
              <button className="banner__tickitz-button">
                <img
                  src={GoogleIcon}
                  className="banner__tickitz-authentication-icon w-100 img-fluid"
                  alt="Google Icon"
                />
                <span className="banner__tickitz-authentication-title mx-2">Google</span>
              </button>
              <button className="banner__tickitz-button">
                <img
                  src={FacebookIcon}
                  className="banner__tickitz-authentication-icon w-100 img-fluid"
                  alt="Facebook Icon"
                />
                <span className="banner__tickitz-authentication-title mx-2">Facebook</span>
              </button>
            </div>
          </div>
        </section>
        {/* <!-- Form Login --> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  GetUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
