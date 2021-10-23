import React, { Component } from "react";
import { Link } from "react-router-dom";
import PremierImage from "../../../assets/img/Sponsor3.png";
import "./index.css";
import { withRouter } from "react-router-dom";
import ListSeats from "../../../components/ListSeats";
import NumberSeats from "../../../components/NumberSeats";
import axios from "../../../utils/axios";

export class OrderMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: ["A", "B", "C", "D", "E", "F", "G"],
      selectSeats: [],
      soldSeats: [],
      scheduleId: props.location.state.scheduleId ? props.location.state.scheduleId : "",
      movieId: props.location.state.movieId ? props.location.state.movieId : "",
      dateBooking: props.location.state.dateSchedule ? props.location.state.dateSchedule : "",
      timeBooking: props.location.state.timeSchedule ? props.location.state.timeSchedule : "",
      user_id: localStorage.getItem("user_id"),
      price: 10,
      isError: false,
      message: ""
    };
  }

  componentDidMount() {
    this.getDetailOrderInfo();
  }

  getDetailOrderInfo = () => {
    const { scheduleId, movieId, dateBooking, timeBooking } = this.state;
    axios
      .get(
        `booking/seat?scheduleId=${scheduleId}&movieId=${movieId}&dateBooking=${dateBooking}&timeBooking=${timeBooking}`
      )
      .then((response) => {
        const seats = response.data.data.map((value) => value.seat);
        this.setState({
          soldSeats: seats
        });
      })
      .catch((error) => {
        new Error(error.response.data.message);
      });
  };

  selectSeats = (seat) => {
    // cek jika seatnya udah di pilih atau belum
    if (this.state.selectSeats.includes(seat)) {
      const removeSeats = this.state.selectSeats.filter((value) => {
        return value !== seat;
      });
      this.setState({
        selectSeats: removeSeats
      });
    } else {
      if (this.state.selectSeats.length >= 5) {
        alert("kursi tidak boleh lebih dari 5!");
      } else {
        this.setState({
          selectSeats: [...this.state.selectSeats, seat]
        });
      }
    }
  };

  handleCheckout = () => {
    if (this.state.selectSeats.length === 0) {
      alert("pilih kursi duluuuuu!!!!");
    } else {
      const {
        movieId,
        scheduleId,
        dateBooking,
        timeBooking,
        selectSeats: seat,
        user_id
      } = this.state;
      const setDataPayment = { movieId, scheduleId, dateBooking, timeBooking, seat, user_id };
      this.props.history.push("/payment", { setDataPayment });
    }
    // pergi ke halaman payment
  };
  render() {
    const parseDate = this.state.dateBooking;
    const leftNumber = [];
    const rightNumber = [];
    for (let i = 1; i <= 7; i++) {
      leftNumber.push(i);
    }
    for (let i = 8; i <= 14; i++) {
      rightNumber.push(i);
    }
    return (
      <>
        {/* SubMenu */}
        <div className="subnav__header">
          <p>Spider-Man: Homecoming</p>
          <button>Change Movie</button>
        </div>
        {/* End SubMenu */}
        {/* <!-- Description Order Page --> */}
        <main className="order__movie">
          <section className="order__movie-list-seat align-items-center">
            <h4 className="order__movie-list-title">Choose Your Seat</h4>
            <div className="order__movie-list-card">
              <p>Choose Your Seats</p>
              <hr className="order__movie-list-line" />
              {/* List Seat */}
              {this.state.seats.map((seat, idx) => (
                <div key={idx}>
                  <ListSeats
                    alphabetSeat={seat}
                    handleSelectSeats={this.selectSeats}
                    soldSeats={this.state.soldSeats}
                    selectedSeats={this.state.selectSeats}
                  />
                </div>
              ))}
              <NumberSeats leftNumSeats={leftNumber} rightNumSeats={rightNumber} />
            </div>
            <div className="order__movie-container">
              <Link
                to="/movie-detail/spiderman-homecoming"
                className="text-decoration-none order__movie-container-button"
              >
                Change your movie
              </Link>
              <button
                className="order__movie-container-button-active"
                onClick={this.handleCheckout}
              >
                Checkout Now
              </button>
            </div>
          </section>
          <section className="order__movie--info-order">
            <h4 className="order__movie-info-order_title">Order Info</h4>
            <div className="order__movie-info-order_card">
              <div className="order__movie-info-order-parent">
                <img
                  src={PremierImage}
                  className="order__movie-info-order-image-premier img-fluid"
                  alt="CineOne21"
                />
                <h4>CineOne21 Cinema</h4>
              </div>
              <div className="order__movie-info-order-list">
                <div className="order__movie-info-order-list-child">
                  <p className="order__movie-info-order-title-none">Movie Selected</p>
                  <span className="order__movie-info-order-title-movie">
                    {localStorage.getItem("nameMovie")}
                  </span>
                </div>
                <div className="order__movie-info-order-list-child">
                  <p>{new Date(this.state.dateBooking).toDateString()}</p>
                  <span>{this.state.timeBooking}am</span>
                </div>
                <div className="order__movie-info-order-list-child">
                  <p>One ticket price</p>
                  <span>${this.state.price}</span>
                </div>
                <div className="order__movie-info-order-list-child">
                  <p>Seat Choosed</p>
                  <span>
                    {this.state.selectSeats.length === 0 ? "-" : this.state.selectSeats.join(",")}
                  </span>
                </div>
              </div>
              <hr className="order__movie-info-order-line" />
              <div className="order__movie-indo-order-total-payment">
                <h3>Total Payment</h3>
                <p>${this.state.price * this.state.selectSeats.length}</p>
              </div>
            </div>
          </section>
        </main>
        {/* <!-- End --> */}
      </>
    );
  }
}

export default withRouter(OrderMovie);
