import React, { useState } from "react";
import { connect } from "react-redux";
import ManageMovie from "../../assets/img/movies3.png";
import { createMovie, getAllMovie } from "../../store/actions/movie";
function FormMovie(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [director, setDirector] = useState("");
  const [casts, setCasts] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [durationHour, setDurationHour] = useState("");
  const [durationMinute, setDurationMinute] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(props.movie.isLoading);
  const [isError, setError] = useState(props.movie.isError);

  const changeFileImage = (event) => {
    setImage(event.target.files[0]);
  };

  const handleManageMovie = (event) => {
    event.preventDefault();
    const formImage = new FormData();

    const setDataMovie = {
      title,
      category,
      directedBy: director,
      casts,
      releaseDate,
      durationHour,
      durationMinute,
      synopsis,
      image
    };
    for (const movies in setDataMovie) {
      formImage.append(movies, setDataMovie[movies]);
    }

    if (
      title === "" ||
      category === "" ||
      director === "" ||
      casts === "" ||
      releaseDate === "" ||
      durationHour === "" ||
      durationMinute === "" ||
      synopsis === "" ||
      image === ""
    ) {
      setError(true);
      return false;
    }
    if (
      title === "" ||
      category === "" ||
      director === "" ||
      casts === "" ||
      releaseDate === "" ||
      durationHour === "" ||
      durationMinute === "" ||
      synopsis === "" ||
      image === ""
    ) {
      setError(true);
    } else {
      setTitle("");
      setCategory("");
      setDirector("");
      setCasts("");
      setReleaseDate("");
      setDurationHour("");
      setDurationMinute("");
      setSynopsis("");
      setImage("");
      props.createMovie(formImage).then(() => {
        event.target.reset();
        props.getAllMovie();
        setError(false);
      });
    }
  };
  console.log(props);
  return (
    <>
      <section className="manage__movie-form">
        <div className="d-flex justify-content-between">
          <h5 className="manage__movie-form-title">Form Movie</h5>
          {!isError ? null : (
            <div className="alert alert-danger" role="alert">
              Lengkapi Form Yang Kosong
            </div>
          )}
        </div>
        <div className="manage__movie-form-card">
          <form onSubmit={handleManageMovie}>
            <div className="manage__movie-form-card-body">
              <div className="manage__movie-form-card-image-parent">
                <img src={ManageMovie} className="img-fluid" alt="Movie" />
              </div>
              <input type="file" name="image" onChange={(e) => changeFileImage(e)} />
              <div className="row manage__movie-form-card-container">
                <div className="col-md-6">
                  <label htmlFor="title">Movie Name</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Spider-Man: Homecoming"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    id="title"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Action, Adventure, Sci-Fi"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    id="category"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="director">Director</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Jon Watts"
                    name="director"
                    onChange={(e) => setDirector(e.target.value)}
                    id="director"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="casts">Casts</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                    name="casts"
                    onChange={(e) => setCasts(e.target.value)}
                    id="casts"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="releaseDate">Release Date</label>
                  <input
                    type="date"
                    className="manage__movie-form-card-input"
                    name="releaseDate"
                    id="releaseDate"
                    onChange={(e) => setReleaseDate(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="durationHour">Duration Hour</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="2"
                    name="durationHour"
                    onChange={(e) => setDurationHour(e.target.value)}
                    id="durationHour"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="durationMinute">Duration Minute</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="13"
                    name="durationMinute"
                    onChange={(e) => setDurationMinute(e.target.value)}
                    id="durationMinute"
                  />
                </div>
              </div>
            </div>
            <h6 style={{ margin: "20px 0px 10px 0px" }}>Synopsis</h6>
            <div>
              <input
                type="text"
                className="manage__movie-form-card-synopsis"
                placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he
lives with his Aunt May, | "
                name="synopsis"
                onChange={(e) => setSynopsis(e.target.value)}
                id="synopsis"
              />
            </div>
            <div className="manage__movie-form-card-container-button">
              <button className="manage__movie-card-button">Reset</button>
              <button type="submit" className="manage__movie-card-button-active">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  getAllMovie,
  createMovie
};
export default connect(mapStateToProps, mapDispatchToProps)(FormMovie);
