import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
        <div className="container">
          <div className="row">
            <div className="col text-center" style={{ marginTop: "250px" }}>
              <h2>Thankyou For Order!</h2>
              <button
                onClick={this.handleLinkToProfile}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontWeight: "bold",
                  color: "#5F2EEA"
                }}
              >
                Check Profile!
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(TicketResult);
