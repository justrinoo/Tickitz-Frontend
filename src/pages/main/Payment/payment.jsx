import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PaymentInfo from "../../../components/PaymentInfo";
import PersonalInfo from "../../../components/PersonalInfo";
import "./payment.css";

export class Payment extends Component {
  render() {
    const data = this.props.location.state.setDataPayment;
    return (
      <>
        {/* <!-- Sub Navigation --> */}
        <div className="navigation__homepage-sub-mobile">
          <p>Total Payment</p>
          <span>${data.seat.length * 10},00</span>
        </div>
        {/* <!-- End Sub Navigation --> */}
        <main className="payment__main">
          <PaymentInfo paymentInfo={data} />
          <PersonalInfo />
        </main>
        {/* <!-- End Payment Content --> */}
      </>
    );
  }
}

export default withRouter(Payment);
