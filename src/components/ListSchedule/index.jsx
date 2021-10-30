import React from "react";
import Premier1 from "../../assets/img/Sponsor1.png";

function ListSchedule() {
  return (
    <>
      <section className="row manage__schedule-list mt-5">
        <div className="col-md-3 manage__schedule-list-card">
          <div className="manage__schedule-list-card-header">
            <div className="text-center">
              <img
                src={Premier1}
                className="manage__schedule-list-card-image img-fluid"
                alt="Ebv.id"
              />
            </div>
            <div className="manage__schedule-list-card-premiere">
              <span>ebv.id</span>
              <span>Whatever street No.12, South Purwokerto</span>
            </div>
          </div>
          <hr />
          <div className="row manage__schedule-list-card-body">
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title">
              <span>08:30</span>
            </div>
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title-not-active">
              <span>10:30</span>
            </div>
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title">
              <span>12:00</span>
            </div>
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title">
              <span>02:00</span>
            </div>
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title">
              <span>04:30</span>
            </div>
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title">
              <span>07:00</span>
            </div>
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title">
              <span>08:00</span>
            </div>
            <div className="col-md-3 mt-2 manage__schedule-list-card-time-title">
              <span>03:00</span>
            </div>
          </div>
          <div className="manage__schedule-list-card-price">
            <span>Price</span>
            <span>$10.00/seat</span>
          </div>
          <div className="manage__schedule-list-card-parent">
            <button className="manage__schedule-list-card-button-active">Update</button>
            <button className="manage__schedule-list-card-button">Delete</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default ListSchedule;
