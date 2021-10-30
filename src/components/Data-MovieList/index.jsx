import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAllMovie, deleteMovie, updateMovie } from "../../store/actions/movie";
function DataListMovie(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [director, setDirector] = useState("");
  const [casts, setCasts] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [durationHour, setDurationHour] = useState("");
  const [durationMinute, setDurationMinute] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [image, setImage] = useState(null);
  const [isShow, setShow] = useState({});
  const [page] = useState(1);
  const [limit] = useState(8);
  const getAllMovieData = () => {
    props.getAllMovie(page, limit);
  };

  const handleChangeUpdate = (id) => {
    setShow({ ...isShow, [id]: !isShow[id] });
  };

  const handleImage = (e) => {
    console.log(event.target.files);
    setImage(image, e.target.files[0]);
    console.log(image);
  };

  const handleUpdateMovie = (id) => {
    const formData = new FormData();
    const setData = {
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
    for (const data in setData) {
      formData.append(data, setData[data]);
    }
    console.log(image);
    props.updateMovie(formData, id);
    window.location.reload();
  };

  const handleDeleteMovie = (id) => {
    props.deleteMovie(id).then(() => {
      props.getAllMovie();
    });
  };
  useEffect(() => {
    getAllMovieData();
  }, [page, limit]);
  return (
    <>
      <section className="manage__movie-list">
        <div className="manage__movie-list-container">
          <div className="manage__movie-list-row">
            <div className="manage__movie-list-column">
              <h5>Data Movie</h5>
            </div>
            <div className="manage__movie-list-column">
              <select className="manage__movie-list-sort">
                <option hidden>Sort</option>
              </select>
              <input
                type="text"
                className="manage__movie-list-search"
                placeholder="Search Movie Name..."
              />
            </div>
          </div>
          <div className="manage__movie-list-card">
            {props.movie.movies.length > 0 ? (
              props.movie.movies.map((film) => (
                <div className="manage__movie-list-card-body" key={film.id}>
                  {!isShow[film.id] ? (
                    <>
                      <img
                        src={`http://localhost:3001/uploads/movie/${film.image}`}
                        className="manage__movie-list-card-image img-fluid"
                        alt={`Film ${film.title}`}
                      />
                      <span className="manage__movie-list-card-title-movie">{film.title}</span>
                      <span className="manage__movie-list-card-category-movie">
                        {film.category}
                      </span>
                      <button
                        className="manage__movie-list-card-button-update"
                        onClick={() => handleChangeUpdate(film.id)}
                      >
                        Update
                      </button>
                      <button
                        className="manage__movie-list-card-button-delete"
                        onClick={() => handleDeleteMovie(film.id)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        type="file"
                        className="form-control mb-2"
                        name="image"
                        onChange={(event) => handleImage(event)}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Name movie..."
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category movie..."
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="director"
                        onChange={(e) => setDirector(e.target.value)}
                        placeholder="Director..."
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="Casts"
                        onChange={(e) => setCasts(e.target.value)}
                        placeholder="Casts..."
                      />
                      <input
                        type="date"
                        className="form-control mb-2"
                        name="releaseDate"
                        onChange={(e) => setReleaseDate(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="durationHour"
                        onChange={(e) => setDurationHour(e.target.value)}
                        placeholder="Duration Hour"
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="durationMinute"
                        onChange={(e) => setDurationMinute(e.target.value)}
                        placeholder="Duration Minute"
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        name="synopsis"
                        onChange={(e) => setSynopsis(e.target.value)}
                        placeholder="dolor sit amet consectetur adipisicing elit"
                      />
                      <button onClick={() => handleUpdateMovie(film.id)}>Update Movie</button>
                    </>
                  )}
                </div>
              ))
            ) : (
              <p>Coming Soon!</p>
            )}
          </div>
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
  deleteMovie,
  updateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DataListMovie));
