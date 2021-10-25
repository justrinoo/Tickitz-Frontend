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
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      menu: false,
      isError: true,
      message: "",
      userId: props.location.state ? props.location.state.userBooking.userId : "",
      movieId: props.location.state ? props.location.state.userBooking.movieId : "",
      scheduleId: props.location.state ? props.location.state.userBooking.scheduleId : "",
      dateBooking: props.location.state ? props.location.state.userBooking.dateBooking : "",
      timeBooking: props.location.state ? props.location.state.userBooking.timeBooking : "",
      seat: props.location.state ? props.location.state.userBooking.seat : "",
      paymentMethod: props.location.state ? props.location.state.userBooking.paymentMethod : "",
      movieName: props.location.state ? props.location.state.movieName : ""
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
    const { userId, movieId, scheduleId, dateBooking, timeBooking, seat, paymentMethod } =
      this.state;
    const userBooking = {
      userId,
      movieId,
      scheduleId,
      dateBooking,
      timeBooking,
      seat,
      paymentMethod
    };
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
