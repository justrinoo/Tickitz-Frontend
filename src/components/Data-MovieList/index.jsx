import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllMovie,
  deleteMovie,
  updateMovie,
  searchMovie,
  searchSort
} from "../../store/actions/movie";
import Pagination from "react-paginate";

function DataListMovie(props) {
  const [dataMovies, setMovies] = useState(props.movie.movies);
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
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [pageInfo] = useState(props.movie.pageInfo.totalPage);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // const [isError, setError] = useState(props.movie.isError);
  const getAllMovieData = () => {
    props
      .getAllMovie(page, limit)
      .then((response) => setMovies(response.value.data.data))
      .catch((error) => new Error(error));
  };

  const handleChangeUpdate = (id) => {
    setShow({ ...isShow, [id]: !isShow[id] });
  };

  const handleImage = (e) => {
    setImage(image, e.target.files[0]);
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
    props.updateMovie(formData, id);
    window.location.reload();
  };

  const handleDeleteMovie = (id) => {
    props.deleteMovie(id).then(() => {
      props.getAllMovie(page, limit).then((response) => {
        setMovies(response.value.data.data);
      });
    });
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    props
      .searchMovie(search)
      .then((response) => {
        setMovies(response.value.data.data);
      })
      .catch((error) => new Error(error.message));
    setSearch(searchValue);
  };

  const handleSort = (event) => {
    // console.log(event.target.value);
    const sortValue = event.target.value;
    props
      .searchSort(sort)
      .then((response) => {
        setMovies(response.value.data.data);
      })
      .catch((error) => new Error(error.message));
    setSort(sortValue);
  };

  const handleChangePagination = (event) => {
    const countPage = event.selected + 1;
    setPage(countPage, () => props.getAllMovie(page, limit));
  };

  useEffect(() => {
    getAllMovieData();
  }, [page, limit, search]);

  console.log(props.movie);
  return (
    <>
      <section className="manage__movie-list">
        <div className="manage__movie-list-container">
          <div className="manage__movie-list-row">
            <div className="manage__movie-list-column">
              <h5>Data Movie</h5>
            </div>
            <div className="manage__movie-list-column">
              <select className="manage__movie-list-sort fw-bold" name="sort" onChange={handleSort}>
                <option hidden>Sort</option>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
              </select>
              <input
                type="text"
                className="manage__movie-list-search"
                placeholder="Search Movie Name..."
                name="search"
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="manage__movie-list-card">
            {dataMovies.length > 0 ? (
              dataMovies.map((film) => (
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

      <section className="manage__movie-pagination">
        <div>
          <Pagination
            previousLabel={null}
            nextLabel={null}
            breakLabel={"..."}
            pageCount={pageInfo}
            onPageChange={handleChangePagination}
            containerClassName={"schedule__pagination"}
            activeClassName={"schedule__pagination-button"}
          />
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  searchMovie,
  searchSort,
  getAllMovie,
  updateMovie,
  deleteMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DataListMovie));
