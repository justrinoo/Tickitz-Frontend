import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllMovie,
  deleteMovie,
  updateMovie,
  searchMovie,
  searchSort,
  setDataUpdate
} from "../../store/actions/movie";
import Pagination from "react-paginate";

function DataListMovie(props) {
  const [dataMovies, setMovies] = useState(props.movie.movies);
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
        const newData = response.value.data.data;
        props.movie.movies = newData;
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
        const newData = response.value.data.data;
        props.movie.movies = newData;
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
            {props.movie.movies.length > 0 ? (
              props.movie.movies.map((film) => {
                const setDate = film.releaseDate;
                const setNewDate = new Date(setDate).toISOString().split("T")[0];
                const setNewDataMovie = { ...film, releaseDate: setNewDate };
                delete setNewDataMovie.createdAt;
                return (
                  <div className="manage__movie-list-card-body" key={setNewDataMovie.id}>
                    <>
                      <img
                        src={`http://localhost:3001/uploads/movie/${setNewDataMovie.image}`}
                        className="manage__movie-list-card-image img-fluid"
                        alt={`setNewDataMovie ${setNewDataMovie.title}`}
                      />
                      <span className="manage__movie-list-card-title-movie">
                        {setNewDataMovie.title}
                      </span>
                      <span className="manage__movie-list-card-category-movie">
                        {setNewDataMovie.category}
                      </span>
                      <button
                        className="manage__movie-list-card-button-update"
                        onClick={() => props.setDataUpdate(setNewDataMovie, setNewDataMovie.id)}
                      >
                        Update
                      </button>
                      <button
                        className="manage__movie-list-card-button-delete"
                        onClick={() => handleDeleteMovie(setNewDataMovie.id)}
                      >
                        Delete
                      </button>
                    </>
                  </div>
                );
              })
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
  setDataUpdate,
  searchMovie,
  searchSort,
  getAllMovie,
  updateMovie,
  deleteMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DataListMovie));
