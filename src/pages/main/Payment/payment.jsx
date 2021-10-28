import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import PaymentInfo from "../../../components/PaymentInfo";
import PersonalInfo from "../../../components/PersonalInfo";
import "./payment.css";

export class Payment extends Component {
  constructor(props) {
    super();
    this.state = {
      movieId: props.location.state ? props.location.state.setDataPayment.movieId : "",
      scheduleId: props.location.state ? props.location.state.setDataPayment.scheduleId : "",
      dateBooking: props.location.state ? props.location.state.setDataPayment.dateBooking : "",
      timeBooking: props.location.state ? props.location.state.setDataPayment.timeBooking : ""
    };
  }
  componentDidMount() {
    if (
      !this.state.movieId ||
      !this.state.scheduleId ||
      !this.state.dateBooking ||
      !this.state.timeBooking
    ) {
      alert("Pilih Film Terlebih Dahulu!");
      this.props.history.push("/");
    }
  }
  render() {
    const data = this.props.location.state ? this.props.location.state.setDataPayment : "";
    return (
      <>
        <Navbar />
        {/* <!-- Sub Navigation --> */}
        <div className="navigation__homepage-sub-mobile">
          <p>Total Payment</p>
          <span>${!data.seat ? null : data.seat.length * 10},00</span>
        </div>
        {/* <!-- End Sub Navigation --> */}
        <main className="payment__main">
          <PaymentInfo paymentInfo={data} />
          <PersonalInfo />
        </main>
        {/* <!-- End Payment Content --> */}
        <Footer />
      </>
    );
  }
}

export default withRouter(Payment);
