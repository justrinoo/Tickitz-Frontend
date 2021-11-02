import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Tickitz from "../../../assets/img/tickitz.png";
import { Download, Printer } from "react-bootstrap-icons";
import "./ticket.css";
export class TicketResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.location.state.setDataBooking.userId,
      movieId: props.location.state.setDataBooking.movieId,
      scheduleId: props.location.state.setDataBooking.scheduleId,
      dateBooking: props.location.state.setDataBooking.dateBooking,
      timeBooking: props.location.state.setDataBooking.timeBooking,
      seat: props.location.state.setDataBooking.seat,
      paymentMethod: props.location.state.setDataBooking.paymentMethod,
      movieName: props.location.state.setDataBooking.movieName
    };
  }
  handleLinkToProfile = () => {
    const {
      userId,
      movieId,
      scheduleId,
      dateBooking,
      timeBooking,
      seat,
      paymentMethod,
      movieName
    } = this.state;
    const userBooking = {
      userId,
      movieId,
      scheduleId,
      dateBooking,
      timeBooking,
      seat,
      paymentMethod,
      movieName
    };
    this.props.history.push("/profile", { userBooking });
  };
  render() {
    return (
      <>
        <Navbar />
        <main className="ticket__result-main">
          <section className="ticket__result-container">
            <section className="ticket__result-card">
              <h5 className="ticket__result-title">Proof of Payment</h5>
              <div className="ticket__result-header">
                <div className="ticket__result-header-column">
                  <img src={Tickitz} className="ticket__result-image img-fluid" alt="Tickitz" />
                  <h6>Admit One</h6>
                  <img src={Tickitz} className="ticket__result-image img-fluid" alt="Tickitz" />
                </div>
              </div>
              <div className="ticket__result-body">
                <div className="ticket__result-body-space mb-4">
                  <h6>Movie</h6>
                  <span>Spiderman: Homecoming</span>
                </div>
                <div className="row ticket__result-body-desc">
                  <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                    <h6>Date</h6>
                    <span>07 July</span>
                  </div>
                  <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                    <h6>Time</h6>
                    <span>02:00pm</span>
                  </div>
                  <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                    <h6>Category</h6>
                    <span>-</span>
                  </div>
                  <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                    <h6>Count </h6>
                    <span>3 Pieces</span>
                  </div>
                  <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                    <h6>Seats</h6>
                    <span>C4, C5, C6</span>
                  </div>
                  <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                    <h6>Price</h6>
                    <span>$30.00</span>
                  </div>
                </div>
              </div>
              <div className="ticket__result-choose">
                <button className="ticket__result-button">
                  <div className="d-flex align-items-center">
                    <Download />
                    Download
                  </div>
                </button>
                <button className="ticket__result-button">
                  <div className="d-flex align-items-center">
                    <Printer />
                    Print
                  </div>
                </button>
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default withRouter(TicketResult);
