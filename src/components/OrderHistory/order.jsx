import React, { Component } from "react";
import Premier1 from "../../assets/img/Sponsor3.png";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useTicked } from "../../store/actions/user";
import { ToastContainer, toast } from "react-toastify";

export class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      showDetails: false,
      isTickedUsed: ""
    };
  }

  componentDidMount() {
    this.getOrderHistory();
  }

  getOrderHistory = () => {
    axios
      .get("booking/user-id")
      .then((response) => {
        this.setState({
          orders: response.data.data
        });
      })
      .catch((error) => new Error(error));
  };
  handleShowDetails = (event) => {
    if (event.target.textContent === "Show Details") {
      this.setState({
        showDetails: true
      });
    } else if (!event.target.textContent === "Show Details") {
      this.setState({
        showDetails: false
      });
    }
  };
  handleUseTicked = (id) => {
    this.props
      .useTicked(id)
      .then((response) => {
        this.setState(
          {
            isTickedUsed: response.value.data.data.statusTicket
          },
          () => {
            this.getOrderHistory();
          }
        );
        toast.success("Ticket di aktifkan...");
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { orders } = this.state;
    return (
      <>
        <div className="profile__column-settings-order-history">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div className="profile__column-settings-order-history-card" key={order.id}>
                <ToastContainer />
                <div className="profile__column-settings-order-history-desc">
                  <span className="profile__column-settings-order-history-date">
                    {new Date(order.dateBooking).toDateString()} - {order.timeBooking}pm
                  </span>
                  <div className="profile__column-settings-order-history-details">
                    <h3>{order.title}</h3>
                    <img
                      src={Premier1}
                      width="100"
                      style={{ objectFit: "contain" }}
                      className="img-fluid"
                      alt="Cineone21"
                    />
                  </div>
                  <hr />
                  <div className="profile__column-settings-order-history-bottom">
                    <button
                      className={`profile__column-settings-order-history-bottom-checked-${
                        order.statusUsed !== "active" ? "used" : "active"
                      }`}
                      onClick={
                        order.statusUsed === "active" ? () => this.handleUseTicked(order.id) : null
                      }
                    >
                      {order.statusUsed !== "active" ? "Ticket Used" : "Ticket in active"}
                    </button>

                    <button
                      className="d-none d-md-block profile__column-settings-order-history-bottom-show-details"
                      onClick={this.handleShowDetails}
                    >
                      Show Details
                    </button>
                  </div>
                </div>
                {this.state.showDetails ? (
                  <div className="profile__column-settings-order-history-bottom-show-details">
                    <div className="profile__column-settings-order-history-show-details-title">
                      <p>Seats</p>
                      <span>{order.seat}</span>
                    </div>
                    <div className="profile__column-settings-order-history-show-details-title">
                      <p>Date Booking</p>
                      <span>{new Date(order.dateBooking).toDateString()}</span>
                    </div>
                    <div className="profile__column-settings-order-history-show-details-title">
                      <p>Time Booking</p>
                      <span>{order.timeBooking}</span>
                    </div>
                    <div className="profile__column-settings-order-history-show-details-title">
                      <p>paymentMethod</p>
                      <span>{order.paymentMethod}</span>
                    </div>
                    <div className="profile__column-settings-order-history-show-details-title">
                      <p>Total Ticket</p>
                      <span>{order.totalTicket}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <p className="text-center fs-2 fw-bold mt-3">
              History masih kosong, Pesan Film yu <Link to="/">disini!</Link>
            </p>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  useTicked
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
