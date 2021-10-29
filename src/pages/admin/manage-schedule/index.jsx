import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import "./index.css";
import ManageMovie from "../../../assets/img/movies3.png";
import Premier1 from "../../../assets/img/Sponsor1.png";
import Premier2 from "../../../assets/img/Sponsor2.png";
import Premier3 from "../../../assets/img/Sponsor3.png";
import Plus from "../../../assets/img/plus.svg";
import Pagination from "react-paginate";
export default function ManageSchedule() {
  return (
    <>
      <Navbar />
      <main className="manage__schedule">
        <section className="manage__schedule-form">
          <h5 className="manage__schedule-form-title">Form Schedule</h5>
          <div className="manage__schedule-form-card">
            <div className="manage__schedule-form-card-body">
              <img src={ManageMovie} className="img-fluid" alt="Movies" />
            </div>
            <div className="row manage__schedule-form-card-row">
              <div className="col-md-6 mb-4">
                <label htmlFor="movie">Movie</label>
                <select className="manage__schedule-form-card-input">
                  <option hidden>Select Movie</option>
                </select>
              </div>
              <div className="col-md-6 mb-4">
                <label htmlFor="location">Location</label>
                <select className="manage__schedule-form-card-input">
                  <option hidden>Select Location</option>
                </select>
              </div>
              <div className="col-md-6 mb-4">
                <label htmlFor="price">Price</label>
                <input type="text" className="manage__schedule-form-card-input" placeholder="10" />
              </div>
              <div className="col-md-3 mb-4">
                <label htmlFor="DateStart">Date Start</label>
                <input type="date" className="manage__schedule-form-card-input" />
              </div>
              <div className="col-md-3 mb-4">
                <label htmlFor="DateEnd">Date End</label>
                <input type="date" className="manage__schedule-form-card-input" />
              </div>
              <div className="col">
                <label htmlFor="Premiere" className="mt-2 mb-0">
                  Premiere
                </label>
                <div className="manage__schedule-form-card-premiere">
                  <img
                    src={Premier1}
                    className="manage__shcedule-form-card-image img-fluid"
                    alt="Hiflix"
                  />
                  <img
                    src={Premier2}
                    className="manage__shcedule-form-card-image img-fluid"
                    alt="Ebv.id"
                  />
                  <img
                    src={Premier3}
                    className="manage__shcedule-form-card-image img-fluid"
                    alt="CineOne21"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="time">Time</label>
                <div className="row manage__schedule-form-card-time">
                  <div className="col-md-3">
                    <button className="manage__schedule-form-card-time-button">
                      <img src={Plus} className="img-fluid" alt="Plus" />
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button className="manage__schedule-form-card-time-select-time">08:30</button>
                  </div>
                  <div className="col-md-3">
                    <button className="manage__schedule-form-card-time-select-time">10:30</button>
                  </div>
                  <div className="col-md-3">
                    <button className="manage__schedule-form-card-time-select-time">12:00</button>
                  </div>
                  <div className="col-md-3 mt-2">
                    <button className="manage__schedule-form-card-time-select-time">04:30</button>
                  </div>
                  <div className="col-md-3 mt-2">
                    <button className="manage__schedule-form-card-time-select-time">07:00</button>
                  </div>
                  <div className="col-md-3 mt-2">
                    <button className="manage__schedule-form-card-time-select-time">08:30</button>
                  </div>
                  <div className="col-md-3 mt-2">
                    <button className="manage__schedule-form-card-time-select-time">09:30</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <div>
          <Pagination
            previousLabel={null}
            nextLabel={null}
            breakLabel={"..."}
            pageCount={1}
            onPageChange={2}
            containerClassName={"schedule__pagination"}
            activeClassName={"schedule__pagination-button"}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
