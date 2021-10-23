import React, { Component } from "react";
import axios from "../../utils/axios";
import { withRouter } from "react-router-dom";

class DetailMovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      id: this.props.match.params.movieId,
      isError: false,
      message: ""
    };
  }
  getDetailMovie = () => {
    axios
      .get(`movie/${this.state.id}`)
      .then((response) => {
        this.setState({
          movies: response.data.data[0]
        });
      })
      .catch((error) => {
        this.setState({
          isError: true
        });
      });
  };
  componentDidMount() {
    this.getDetailMovie();
  }
  render() {
    const movie = this.state.movies;
    return (
      <>
        {movie ? (
          <>
            <section className="detail__movie">
              <section className="detail__movie--container">
                <img
                  src={`http://localhost:3001/uploads/movie/${movie.image}`}
                  className="img-fluid detail__movie--image"
                  alt="Spiderman Movie"
                />
              </section>
              <section className="detail__movie--desc">
                <h2 className="fw-bold">{movie.title}</h2>
                <p className="detail__movie--desc-subtitle">{movie.category}</p>
                <div className="detail__movie--desc-mobile">
                  <div className="detail__movie--desc-child">
                    <span className="detail__movie-desc-title">Release Date</span>
                    <p>{movie.releaseDate}</p>
                  </div>
                  <div className="detail__movie--desc-child">
                    <span className="detail__movie-desc-title">Duration</span>
                    <p>
                      {movie.durationHour} hours {movie.durationMinute} Minutes
                    </p>
                  </div>
                  <div className="detail__movie--desc-child">
                    <span className="detail__movie-desc-title">Directed by</span>
                    <p>{movie.directedBy}</p>
                  </div>
                  <div className="detail__movie--desc-child">
                    <span className="detail__movie-desc-title">Casts</span>
                    <p>{movie.casts}</p>
                  </div>
                </div>
              </section>
              <hr className="detail__movie--line d-block d-md-none" />
            </section>
            <section className="detail_movie--desc-synopsis">
              <p className="fw-bold">Synopsis</p>
              <p className="detail__movie--desc-synopsis--paragraph ">{movie.synopsis}</p>
            </section>
          </>
        ) : (
          <p className="fs-2 text-center fw-bold">Movie tidak ditemukan</p>
        )}
      </>
    );
  }
}

export default withRouter(DetailMovieComponent);
