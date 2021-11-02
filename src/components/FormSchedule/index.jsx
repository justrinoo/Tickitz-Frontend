import React, { Component } from "react";
import ManageMovie from "../../assets/img/movies3.png";
import Premier1 from "../../assets/img/Sponsor1.png";
import Premier2 from "../../assets/img/Sponsor2.png";
import Premier3 from "../../assets/img/Sponsor3.png";
import Plus from "../../assets/img/plus.svg";
import { connect } from "react-redux";
import { postPremiere, getAllPremiere } from "../../store/actions/premiere";
import { getAllMovie } from "../../store/actions/movie";
import axios from "../../utils/axios";
class FormSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMovies: props.movie,
      dataPremiere: "",
      dataLocation: [],
      selectTime: [],
      isDisabled: false,
      isActive: false,
      isShow: false,
      isError: false,
      message: "",
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
      movie_id: movieId,
      location,
      price,
      dateStart,
      dateEnd,
      premiere: this.state.dataPremiere,
      time: newTime.toString()
    };
    if (
      movieId === "" &&
      location === "" &&
      price === "" &&
      dateStart === "" &&
      dateEnd === "" &&
      premiere === "" &&
      time === ""
    ) {
      alert("isi form yang kosong!");
      this.setState({
        isError: true,
        message: "Silahkan isi form yang kosong!"
      });
      // alert("isi form yang kosong!");
    } else {
      this.props.postPremiere(setDataPremiere).then(() => {
        event.target.reset();
        this.props.getAllPremiere(1, 6);
      });
    }
  };

  getLocation = async () => {
    try {
      const response = await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
      this.setState({
        dataLocation: response.data.provinsi
      });
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
    if (value) {
      this.setState({
        isActive: true,
        dataPremiere: value
      });
    } else {
      this.setState({
        isActive: false,
        dataPremiere: null
      });
    }
  };

  componentDidMount() {
    this.getLocation();
    this.props.getAllMovie();
  }
  handleFormTime = () => {
    this.setState({
      isShow: true
    });
  };
  handleAddedTime = (event) => {
    if (event.key === "Enter") {
      this.setState({
        selectTime: [...this.state.selectTime, event.target.value],
        isShow: false
      });
    }
  };

  render() {
    console.log(this.state.selectTime);
    return (
      <>
        <section className="manage__schedule-form">
          <h5 className="manage__schedule-form-title">Form Schedule</h5>
          <form onSubmit={this.handleSubmitPremiere}>
            {this.state.isError ? (
              <p className="text-end text-danger fw-bold">{this.state.message}</p>
            ) : null}
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
                            <option value={value.nama} key={value.id}>
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
                      <div className="manage__schedule-form-card-time-button-parent">
                        {this.state.isShow ? (
                          <input
                            type="text"
                            onKeyPress={this.handleAddedTime}
                            name="time"
                            className="form-control w-100"
                          />
                        ) : (
                          <button
                            className="manage__schedule-form-card-time-button"
                            onClick={this.handleFormTime}
                          >
                            <img src={Plus} className="img-fluid" alt="Plus" />
                          </button>
                        )}
                      </div>
                    </div>
                    {this.state.selectTime.map((value, index) => (
                      <div className="col-md-3" key={index}>
                        <div
                          className="manage__schedule-form-card-time-select-time"
                          style={{ cursor: "default" }}
                        >
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <button className="manage__schedule-form-card-button-reset mx-1">Reset</button>
                    <button
                      type="submit"
                      className="manage__schedule-form-card-button-submit manage__schedule-form-card-button-disabled"
                      disabled={this.state.isDisabled}
                    >
                      Submit
                    </button>
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
  getAllMovie,
  getAllPremiere
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSchedule);
