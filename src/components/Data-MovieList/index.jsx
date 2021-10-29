import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllMovie } from "../../store/actions/movie";
function DataListMovie(props) {
  const [page] = useState(1);
  const [limit] = useState(8);
  const getAllMovieData = () => {
    props.getAllMovie(page, limit);
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
                  <img
                    src={`http://localhost:3001/uploads/movie/${film.image}`}
                    className="manage__movie-list-card-image img-fluid"
                    alt={`Film ${film.title}`}
                  />
                  <span className="manage__movie-list-card-title-movie">{film.title}</span>
                  <span className="manage__movie-list-card-category-movie">{film.category}</span>
                  <button className="manage__movie-list-card-button-update">Update</button>
                  <button className="manage__movie-list-card-button-delete">Delete</button>
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
  getAllMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(DataListMovie);
