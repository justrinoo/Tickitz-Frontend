import React, { Component } from "react";
import Warning from "../../assets/img/Icon-Warning.svg";
export class PersonalInfo extends Component {
  render() {
    return (
      <>
        <section className="personal__main-info">
          <h4 className="personal__main-info-title">Personal Info</h4>
          <div className="personal__main-info-card">
            <div className="personal__main-info-card-child">
              <p>Full Name</p>
              <input
                type="text"
                className="personal__main-info-card-input"
                name="userId"
                value={localStorage.getItem("firstName")}
              />
            </div>
            <div className="personal__main-info-card-child">
              <p>Email</p>
              <input
                type="email"
                className="personal__main-info-card-input"
                value={localStorage.getItem("email")}
              />
            </div>
            <div className="personal__main-info-card-child">
              <p>Phone Number</p>
              <input
                type="text"
                className="personal__main-info-card-input"
                name="phoneNumber"
                value={localStorage.getItem("phoneNumber")}
              />
            </div>
            <div className="personal__main-info-card-alert">
              <img src={Warning} className="img-fluid" alt="Warning Alert" />
              <span>Fill your data correctly.</span>
            </div>
          </div>
          <button className="payment__main-method-button-active-mobile">Pay your order</button>
        </section>
      </>
    );
  }
}

export default PersonalInfo;
