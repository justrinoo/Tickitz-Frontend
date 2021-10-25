import React, { Component } from "react";
import Premier1 from "../../assets/img/Sponsor3.png";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

export class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
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
      .catch((error) => console.log(error.response));
  };
  render() {
    const { orders } = this.state;
    return (
      <>
        <div className="profile__column-settings-order-history">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div className="profile__column-settings-order-history-card" key={order.id}>
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
                    >
                      {order.statusUsed !== "active" ? "Ticket Used" : "Ticket in active"}
                    </button>

                    <button className="profile__column-settings-order-history-bottom-show-details">
                      Show Details
                    </button>
                  </div>
                </div>
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

export default OrderHistory;
