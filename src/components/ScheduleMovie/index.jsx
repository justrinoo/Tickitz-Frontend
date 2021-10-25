import React, { Component } from "react";
import IcLocation from "../../assets/img/location.svg";
import axios from "../../utils/axios";
import Premier1 from "../../assets/img/Sponsor1.png";
import { withRouter } from "react-router-dom";
import SchedulePagination from "../../components/SchedulePagination";

class ScheduleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
      scheduleId: "",
      movieId: props.id,
      searchLocation: "",
      dateSchedule: new Date().toISOString().split("T")[0],
      timeSchedule: "",
      showSchedule: false,
      selectedTime: true,
      page: 1,
      limit: 1,
      pageInfo: []
    };
  }

  getLocation = () => {
    axios
      .get("schedule", this.state.schedules)
      .then((response) => {
        const checkSchedule = response.data.data;
        const dataSchedule = checkSchedule.filter((value) => {
          return value.movie_id === parseInt(this.state.movieId);
        });
        this.setState({
          schedules: dataSchedule
        });
      })
      .catch((error) => {
        new Error(error.response);
      });
  };

  handleLocation = (e) => {
    axios
      .get(
        `schedule?searchMovieId=${this.state.movieId}&searchLocation=${e.target.value}&page=${this.state.page}&limit=${this.state.limit}&sort=ASC`
      )
      .then((response) => {
        this.setState({
          schedules: response.data.data,
          showSchedule: true,
          pageInfo: response.data.pagination
        });
      })
      .catch((error) => console.log(error.message));
  };

  handleSchedulePagination = (event) => {
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.handleLocation;
        console.log(this.state.page);
        console.log(this.state.schedules);
      }
    );
  };

  componentDidMount() {
    this.getLocation();
    this.handleLocation;
  }
  handleDateSchedule = (event) => {
    this.setState({
      dateSchedule: event.target.value
    });
  };
  handleTimeSchedule = (e, time) => {
    this.setState({
      timeSchedule: time,
      selectedTime: false
    });
  };
  handleBookNow = (id_schedule) => {
    this.setState(
      {
        scheduleId: id_schedule
      },
      () => {
        // proses pengecekan apakah time schedule itu udah di pick atau belum?
        const { movieId, scheduleId, dateSchedule, timeSchedule } = this.state;
        this.props.history.push("/order", { movieId, scheduleId, dateSchedule, timeSchedule });
      }
    );
  };

  render() {
    const filterLocation = this.state.schedules.map((value) => value.location).pop();
    const location = filterLocation === undefined ? null : filterLocation;
    return (
      <>
        <section className="detail__schedule">
          <p className="detail__schedule--title-schedule text-center">Showtimes and Tickets</p>
          <div className="detail__schedule-form">
            <input
              type="date"
              className="detail__schedule-input-date"
              onChange={this.handleDateSchedule}
              value={this.state.dateSchedule}
              name="dateSchedule"
            />
            <div className="kotak-icon">
              <img src={IcLocation} className="img-fluid mt-3" alt="Location" />
            </div>
            <select
              className="detail__schedule-input-city"
              name="searchLocation"
              onChange={this.handleLocation}
            >
              <option hidden>Set a City</option>
              <option value={location}>{location}</option>
            </select>
          </div>
        </section>
        <section className="detail__list_schedule">
          <div className="detail__list_schedule-container">
            <>
              {this.state.showSchedule ? (
                this.state.schedules.map((schedule) => {
                  const filterTime = schedule.time;
                  const newTime = filterTime.filter((value) => value === this.state.timeSchedule);
                  const toStringTime = newTime.toString();
                  return schedule.movie_id !== parseInt(this.state.movieId) ? (
                    <p className="fw-bold fs-2">Error</p>
                  ) : (
                    <div
                      key={schedule.id_schedule}
                      className={toStringTime === this.state.timeSchedule ? "d-block" : "d-none"}
                    >
                      <div className="detail__list_schedule-card position-relative">
                        <div className="detail__list_schedule-card-body">
                          <img
                            src={Premier1}
                            className="detail__list_schedule-card-image img-fluid"
                            alt={schedule.premiere}
                          />
                          <div className="detail__list_schedule-card-body-title">
                            <h5>{schedule.premiere}</h5>
                            <span>Whatever street No.12, South Purwokerto</span>
                          </div>
                        </div>
                        <hr className="position-absolute line-detail" />
                        <div className="detail__list_schedule-card-body-time">
                          {typeof schedule.time !== "object"
                            ? null
                            : schedule.time.map((timeSchedule, idx) => (
                                <span key={idx}>
                                  <button
                                    className="detail__list_schedule-card-button-time text-reset"
                                    onClick={(event) =>
                                      this.handleTimeSchedule(event, timeSchedule)
                                    }
                                  >
                                    {timeSchedule}
                                  </button>
                                </span>
                              ))}
                        </div>
                        <div className="detail__list_schedule-card-price">
                          <h5>Price</h5>
                          <h5>$10.00/seat</h5>
                        </div>
                        <button
                          type="button"
                          onClick={() => this.handleBookNow(schedule.id_schedule)}
                          className="detail__list_schedule-card-button"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="mx-auto fw-bold fs-4">Select Your Location!</p>
              )}
            </>
          </div>
        </section>
        {this.state.showSchedule ? (
          <SchedulePagination
            data={this.state.schedules}
            pageInfo={this.state.pageInfo}
            handleSchedule={this.handleSchedulePagination}
          />
        ) : null}
      </>
    );
  }
}
export default withRouter(ScheduleMovie);
