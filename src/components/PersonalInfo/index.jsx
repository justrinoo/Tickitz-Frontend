import React, { Component } from "react";
import Warning from "../../assets/img/Icon-Warning.svg";
import axios from "../../utils/axios";
export class PersonalInfo extends Component {
  render() {
    return (
      <>
        <section className="personal__main-info">
          <h4 className="personal__main-info-title">Personal Info</h4>
          <form>
            <div className="personal__main-info-card">
              <div className="personal__main-info-card-child">
                <p>Full Name</p>
                <input
                  type="text"
                  className="personal__main-info-card-input"
                  name="userId"
                  value="Jonas El Rodriguez"
                  disabled
                />
              </div>
              <div className="personal__main-info-card-child">
                <p>Email</p>
                <input
                  type="email"
                  className="personal__main-info-card-input"
                  placeholder="jonasrodri123@gmail.com"
                />
              </div>
              <div className="personal__main-info-card-child">
                <p>Phone Number</p>
                <input
                  type="text"
                  className="personal__main-info-card-input"
                  placeholder="81445687121"
                  name="phoneNumber"
                />
              </div>
              <div className="personal__main-info-card-alert">
                <img src={Warning} className="img-fluid" alt="Warning Alert" />
                <span>Fill your data correctly.</span>
              </div>
            </div>
            <button type="submit" className="payment__main-method-button-active-mobile">
              Pay your order
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default PersonalInfo;
