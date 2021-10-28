import React, { useState } from "react";
import "./index.css";
import LogoTickitz from "../../../assets/img/tickitz.png";
import Banner from "../../../assets/img/bg-login.png";
import TickitzMobile from "../../../assets/img/Logo.svg";
import GoogleIcon from "../../../assets/img/Google-icon.svg";
import FacebookIcon from "../../../assets/img/Facebook-icon.svg";
import { Link } from "react-router-dom";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNUmber] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const changeSetFirstName = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <>
      {/* <!-- Welcome Ticktiz --> */}
      <section className="register__tickitz">
        <div className="register__image-container">
          <div className="register__overlay">
            <div className="register__overlay-parent">
              <img src={LogoTickitz} className="register__overlay-image img-fluid" alt="tickitz" />
              <h2 className="register__title">Lets build your account</h2>
              <p className="register__paragraph">
                To be a loyal moviegoer and access all of features, your details are required.
              </p>
              <div className="register__stepper">
                <div className="register__stepper-list register__list-active">
                  <span className="register__stepper-title-active">
                    Fill your additional details
                  </span>
                </div>
                <div className="register__stepper-line"></div>
                <div className="register__stepper-list">
                  <span className="register__stepper-title">Activate your account</span>
                </div>
                <div className="register__stepper-line"></div>
                <div className="register__stepper-list">
                  <span className="register__stepper-title">Done</span>
                </div>
              </div>
            </div>
          </div>
          <img src={Banner} className="register__image" alt="Banner tickitz" />
        </div>
        {/* Form Register */}
        <div className="form__parent">
          <img src={TickitzMobile} className="mb-5 d-block d-md-none" alt="Tickitz" />
          <p className="form__child__title">Fill your additional details</p>
          <p className="d-block d-md-none form__child__title-mobile">Sign Up</p>
          <p></p>
          <form method="POST">
            <div className="mb-3 form__auth">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input__form-register"
                id="email"
                name="email"
                onChange={changeSetFirstName}
                placeholder="Write your email"
              />
            </div>
            <div className="mb-3 form__auth">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="input__form-register"
                id="password"
                name="password"
                // onChange={this.handleInputForm}
                placeholder="Write your password"
              />
            </div>
            <div className="d-none d-md-block mb-3 form__auth-checkbox">
              <input
                type="checkbox"
                className="input__form-register-checkbox"
                id="termsconditions"
                // onChange={this.handleInputForm}
              />
              <label htmlFor="termsconditions">I agree to terms & conditions</label>
            </div>
            <div className="mb-3 form__auth">
              <button type="submit" className="button__signin">
                Join for free now
              </button>
              <div className="d-flex justify-content-center mt-4 forget-password__header">
                <p className="register__link-question">
                  Do you already have an account ?{" "}
                  <Link to="/login" className="register__link-to">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </form>

          <div className="register__break">
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <div className="banner__ticktiz-authentication">
            <button className="register__button">
              <img
                src={GoogleIcon}
                className="register__authentication-icon w-100 img-fluid"
                alt="Google Icon"
              />
              <span className="register__authentication-title mx-2">Google</span>
            </button>
            <button className="register__button">
              <img
                src={FacebookIcon}
                className="register__authentication-icon w-100 img-fluid"
                alt="Facebook Icon"
              />
              <span className="register__authentication-title mx-2">Facebook</span>
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Form Register --> */}
    </>
  );
}
