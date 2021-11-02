import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ManageMovie from "../../assets/img/movies3.png";
import { createMovie, getAllMovie, updateMovie } from "../../store/actions/movie";
function FormMovie(props) {
  const [dataFormMovie, setFormMovie] = useState({
    title: "",
    category: "",
    directedBy: "",
    casts: "",
    releaseDate: "",
    durationHour: "",
    durationMinute: "",
    synopsis: "",
    id: "",
    image: null
  });

  const [isError, setError] = useState(props.movie.isError);

  const changeFileImage = (event) => {
    setFormMovie({ ...dataFormMovie, image: event.target.files[0] });
  };

  const handleChangeInput = (e) => {
    setFormMovie({ ...dataFormMovie, [e.target.name]: e.target.value });
  };

  const handleUpdateMovie = (event) => {
    event.preventDefault();
    props
      .updateMovie(dataFormMovie, dataFormMovie.id)
      .then(() => {
        setFormMovie({
          title: "",
          directedBy: "",
          category: "",
          casts: "",
          releaseDate: "",
          durationMinute: "",
          durationHour: "",
          synopsis: ""
        });
        props.getAllMovie(1, 8);
      })
      .catch((error) => console.log(error));
    console.log("Handle Update...!", dataFormMovie);
  };

  const handleManageMovie = (event) => {
    event.preventDefault();
    const {
      title,
      category,
      casts,
      directedBy,
      durationHour,
      durationMinute,
      image,
      releaseDate,
      synopsis
    } = dataFormMovie;
    const setDataMovie = {
      title,
      category,
      casts,
      directedBy,
      durationHour,
      durationMinute,
      image,
      releaseDate,
      synopsis
    };
    const formImage = new FormData();
    for (const movies in setDataMovie) {
      formImage.append(movies, setDataMovie[movies]);
    }

    for (const data in setDataMovie) {
      if (setDataMovie[data] === "") {
        setError(true);
        return false;
      }
    }
    props.createMovie(formImage).then(() => {
      setFormMovie("");
      event.target.reset();
      props.getAllMovie();
      setError(false);
    });
  };
  const handleReset = () => {
    setError(false);
    setFormMovie({
      title: "",
      category: "",
      casts: "",
      directedBy: "",
      releaseDate: "",
      durationHour: "",
      durationMinute: ""
    });
    props.movie.isUpdate = false;
  };
  useEffect(() => {
    setFormMovie({ ...props.movie.data });
  }, [props.movie.data]);

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
          <form onSubmit={props.movie.isUpdate ? handleUpdateMovie : handleManageMovie}>
            <div className="manage__movie-form-card-body">
              <div className="manage__movie-form-card-image-parent">
                <img src={ManageMovie} className="img-fluid" alt="Movie" />
              </div>
              <input type="file" name="image" onChange={changeFileImage} />
              <div className="row manage__movie-form-card-container">
                <div className="col-md-6">
                  <label htmlFor="title">Movie Name</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Spider-Man: Homecoming"
                    name="title"
                    onChange={handleChangeInput}
                    id="title"
                    value={dataFormMovie.title}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Action, Adventure, Sci-Fi"
                    name="category"
                    onChange={handleChangeInput}
                    id="category"
                    value={dataFormMovie.category}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="director">Director</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Jon Watts"
                    name="directedBy"
                    onChange={handleChangeInput}
                    id="directedBy"
                    value={dataFormMovie.directedBy}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="casts">Casts</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                    name="casts"
                    onChange={handleChangeInput}
                    id="casts"
                    value={dataFormMovie.casts}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="releaseDate">Release Date</label>
                  <input
                    type="date"
                    className="manage__movie-form-card-input"
                    name="releaseDate"
                    id="releaseDate"
                    onChange={handleChangeInput}
                    value={dataFormMovie.releaseDate}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="durationHour">Duration Hour</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="2"
                    name="durationHour"
                    onChange={handleChangeInput}
                    id="durationHour"
                    value={dataFormMovie.durationHour}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="durationMinute">Duration Minute</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="13"
                    name="durationMinute"
                    onChange={handleChangeInput}
                    id="durationMinute"
                    value={dataFormMovie.durationMinute}
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
                onChange={handleChangeInput}
                id="synopsis"
                value={dataFormMovie.synopsis}
              />
            </div>
            <div className="manage__movie-form-card-container-button">
              <button className="manage__movie-card-button" onClick={handleReset}>
                Reset
              </button>
              <button type="submit" className="manage__movie-card-button-active">
                {props.movie.isUpdate ? "Update" : "Submit"}
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
  updateMovie,
  getAllMovie,
  createMovie
};
export default connect(mapStateToProps, mapDispatchToProps)(FormMovie);
