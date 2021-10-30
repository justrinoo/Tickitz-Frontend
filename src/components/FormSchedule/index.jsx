import React, { Component } from "react";
import ManageMovie from "../../assets/img/movies3.png";
import Premier1 from "../../assets/img/Sponsor1.png";
import Premier2 from "../../assets/img/Sponsor2.png";
import Premier3 from "../../assets/img/Sponsor3.png";
import Plus from "../../assets/img/plus.svg";
import { connect } from "react-redux";
import { postPremiere } from "../../store/actions/premiere";
import { getAllMovie } from "../../store/actions/movie";
import axios from "../../utils/axios";
class FormSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMovies: props.movie,
      dataLocation: props.movie,
      selectTime: [],
      form__schedule: {
        location: "",
        movieId: "",
        price: "",
        dateStart: "",
        dateEnd: "",
        premiere: "",
        time: ""
      }
    };
  }

  handleSubmitPremiere = (event) => {
    event.preventDefault();
    const newTime = this.state.selectTime;
    const { movieId, location, price, dateStart, dateEnd, premiere, time } =
      this.state.form__schedule;
    const setDataPremiere = {
      movieId,
      location,
      price,
      dateStart,
      dateEnd,
      premiere,
      time: newTime.toString()
    };
    console.log(setDataPremiere);
  };

  getLocation = async () => {
    try {
      const response = await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
      setDataLocation(response.data.provinsi);
    } catch (error) {
      new Error(error.message);
    }
  };
  handleChangeInput = (event) => {
    this.setState({
      form__schedule: {
        ...this.state.form__schedule,
        [event.target.name]: event.target.value
      }
    });
  };
  getValueImage = (event) => {
    let value = event.target.alt;
  };

  getValueTime = (event) => {
    let value = event.target.textContent;
    this.setState({
      selectTime: [...this.state.selectTime, value]
    });

    // console.log(value);
  };

  componentDidMount() {
    this.getLocation();
    this.props.getAllMovie();
  }

  render() {
    return (
      <>
        <section className="manage__schedule-form">
          <h5 className="manage__schedule-form-title">Form Schedule</h5>
          <form onSubmit={this.handleSubmitPremiere}>
            <div className="manage__schedule-form-card">
              <div className="manage__schedule-form-card-body">
                <img src={ManageMovie} className="img-fluid" alt="Movies" />
              </div>
              <div className="row manage__schedule-form-card-row">
                <div className="col-md-6 mb-4">
                  <label htmlFor="movie">Movie</label>
                  <select
                    className="manage__schedule-form-card-input"
                    name="movieId"
                    onChange={this.handleChangeInput}
                  >
                    <option hidden>Select Movie</option>
                    {this.state.dataMovies.movies.length > 0 ? (
                      this.state.dataMovies.movies.map((value) => {
                        return (
                          <>
                            <option value={value.id} key={value.id}>
                              {value.title}
                            </option>
                          </>
                        );
                      })
                    ) : (
                      <option hidden>movie not found!</option>
                    )}
                  </select>
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="location">Location</label>
                  <select
                    className="manage__schedule-form-card-input"
                    name="location"
                    onChange={this.handleChangeInput}
                  >
                    <option hidden>Select Location</option>
                    {this.state.dataLocation.length > 0 ? (
                      this.state.dataLocation.map((value) => {
                        return (
                          <>
                            <option value={value.id} key={value.id}>
                              {value.nama}
                            </option>
                          </>
                        );
                      })
                    ) : (
                      <option hidden>movie not found!</option>
                    )}
                  </select>
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="price" name="price">
                    Price
                  </label>
                  <input
                    type="text"
                    className="manage__schedule-form-card-input"
                    placeholder="10"
                    name="price"
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="col-md-3 mb-4" name="dateStart">
                  <label htmlFor="DateStart">Date Start</label>
                  <input
                    type="date"
                    className="manage__schedule-form-card-input"
                    name="dateStart"
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="col-md-3 mb-4" name="dateEnd">
                  <label htmlFor="DateEnd">Date End</label>
                  <input
                    type="date"
                    className="manage__schedule-form-card-input"
                    name="dateEnd"
                    onChange={this.handleChangeInput}
                  />
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
                      onClick={this.getValueImage}
                    />
                    <img
                      src={Premier2}
                      className="manage__shcedule-form-card-image img-fluid"
                      alt="Ebv.id"
                      onClick={this.getValueImage}
                    />
                    <img
                      src={Premier3}
                      className="manage__shcedule-form-card-image img-fluid"
                      alt="CineOne21"
                      onClick={this.getValueImage}
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
                      <button
                        onClick={this.getValueTime}
                        className="manage__schedule-form-card-time-select-time"
                      >
                        08:30
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onClick={this.getValueTime}
                        className="manage__schedule-form-card-time-select-time"
                      >
                        10:30
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onClick={this.getValueTime}
                        className="manage__schedule-form-card-time-select-time"
                      >
                        12:00
                      </button>
                    </div>
                    <div className="col-md-3 mt-2">
                      <button
                        onClick={this.getValueTime}
                        className="manage__schedule-form-card-time-select-time"
                      >
                        04:30
                      </button>
                    </div>
                    <div className="col-md-3 mt-2">
                      <button
                        onClick={this.getValueTime}
                        className="manage__schedule-form-card-time-select-time"
                      >
                        07:00
                      </button>
                    </div>
                    <div className="col-md-3 mt-2">
                      <button
                        onClick={this.getValueTime}
                        className="manage__schedule-form-card-time-select-time"
                      >
                        08:30
                      </button>
                    </div>
                    <div className="col-md-3 mt-2">
                      <button
                        onClick={this.getValueTime}
                        className="manage__schedule-form-card-time-select-time"
                      >
                        09:30
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  postPremiere,
  getAllMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSchedule);
