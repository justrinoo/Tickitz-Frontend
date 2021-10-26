import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./index.css";
import ProfileInformation from "../../../components/ProfileInfo";
import UserInformation from "../../../components/UserInformation";
import UserPrivacy from "../../../components/UserPrivacy";
import axios from "../../../utils/axios";
import OrderHistory from "../../../components/OrderHistory/order";
export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      menu: false,
      isError: true,
      message: ""
    };
  }
  componentDidMount = () => {
    this.getUserInformation();
  };

  getUserInformation = () => {
    axios
      .get("user")
      .then((response) => {
        this.setState({
          users: response.data.data[0]
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
          message: error.response.data.message
        });
      });
  };
  handleMenuProfile = (e) => {
    if (e.target.textContent === "Account Settings") {
      this.setState({
        menu: false
      });
    } else {
      this.setState({
        menu: true
      });
    }
  };
  render() {
    const { users } = this.state;

    return (
      <>
        <Navbar />
        <section className="profile">
          <section className="profile__column">
            <ProfileInformation data={users} />
            <section className="profile__column-settings">
              <div className="profile__column-settings-navigation">
                <button onClick={this.handleMenuProfile}>Account Settings</button>
                <button onClick={this.handleMenuProfile}>Order History</button>
              </div>
              {!this.state.menu ? (
                <>
                  <UserInformation data={users} />
                  <UserPrivacy />
                </>
              ) : (
                <>
                  <OrderHistory movieName={this.state.movieName} />
                </>
              )}
            </section>
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Profile;
