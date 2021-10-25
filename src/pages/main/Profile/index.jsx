import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./index.css";
import ProfileImage from "../../../assets/img/Profile.png";
import menu from "../../../assets/img/menu.svg";
export class Profile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section className="profile">
          <section className="profile__column">
            <section className="profile__column-info">
              <div className="profile__column-info-nav-menu">
                <p>INFO</p>
                <img src={menu} width="20" height="20" alt="menu" />
              </div>
              <div className="profile__column-info-personal">
                <img src={ProfileImage} alt="" />
                <h3>Jonas El Rodriguez</h3>
                <span>Moviegoers</span>
              </div>
            </section>
            <section className="profile__column-settings">
              <div className="profile__column-settings-navigation">
                <span>Account Settings</span>
                <span>Order History</span>
              </div>
              <form>
                <div className="profile__column-settings-detail-information">
                  <p>Details Information</p>
                  <hr style={{ border: "1px solid #DEDEDE", opacity: "0.1" }} />
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{ display: "block" }}>First Name</label>
                      <input
                        type="text"
                        className="profile__column-settings-input_form"
                        value="Jonas"
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ display: "block" }}>Last Name</label>
                      <input
                        type="text"
                        className="profile__column-settings-input_form"
                        value="El Rodriguez"
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ display: "block" }}>E-mail</label>
                      <input
                        type="text"
                        className="profile__column-settings-input_form"
                        value="jonasrodrigu123@gmail.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ display: "block" }}>Phone Number</label>
                      <input
                        type="text"
                        className="profile__column-settings-input_form"
                        value="81445687121"
                      />
                    </div>
                  </div>
                </div>
                <button className="profile__column-settings-button-update-account">
                  Update changes
                </button>
              </form>
              <form>
                <div className="profile__column-settings-detail-information">
                  <p>Account and Privacy</p>
                  <hr style={{ border: "1px solid #DEDEDE", opacity: "0.1" }} />
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{ display: "block" }}>New Password</label>
                      <input
                        type="password"
                        className="profile__column-settings-input_form"
                        placeholder="Write your password..."
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ display: "block" }}>Confirm Password</label>
                      <input
                        type="password"
                        className="profile__column-settings-input_form"
                        placeholder="Confirm your password..."
                      />
                    </div>
                  </div>
                </div>
                <button className="profile__column-settings-button-update-account">
                  Update changes
                </button>
              </form>
            </section>
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Profile;
