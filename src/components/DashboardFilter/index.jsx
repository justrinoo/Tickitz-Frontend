import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { connect } from "react-redux";
import { getAllPremiere } from "../../store/actions/premiere";
import { getAllMovie } from "../../store/actions/movie";
import { getDashboard } from "../../store/actions/user";

function DashboardFilter(props) {
  const [dataLocation, setDataLocation] = useState([]);
  const [dataMovie] = useState(props.movie);
  const [dataPremiere] = useState(props.premiere);
  const [location, setLocation] = useState("");
  const [premiere, setPremiere] = useState("");
  const [movie, setMovie] = useState("");

  const findDataDashboard = (event) => {
    event.preventDefault();
    props.getDashboard(movie, location, premiere).then((response) => {
      localStorage.setItem("dataStatistic", JSON.stringify(response.value.data.data));
    });
  };

  const getLocation = async () => {
    try {
      const response = await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
      setDataLocation(response.data.provinsi);
    } catch (error) {
      new Error(error.message);
    }
  };

  useEffect(() => {
    getLocation();
    props.getAllMovie();
    props.getAllPremiere();
  }, [location, premiere, movie]);
  return (
    <>
      <div className="dashboard__filter-container">
        <form onSubmit={findDataDashboard}>
          <div className="mb-4">
            <select
              className="dashboard__filter-movie"
              name="movie"
              onChange={(e) => setMovie(e.target.value)}
            >
              <option hidden>Select Movie</option>
              <option hidden>Select Location</option>
              {dataMovie.movies.map((movie) => (
                <>
                  <option value={movie.id} key={movie.id}>
                    {movie.title}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <select
              className="dashboard__filter-premiere"
              name="premiere"
              onChange={(e) => setPremiere(e.target.value)}
            >
              <option hidden>Select Premiere</option>
              {dataPremiere.premiere.map((premiere) => {
                return (
                  <>
                    <option value={premiere.premiere} key={premiere.id}>
                      {premiere.premiere}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <select
              className="dashboard__filter-location"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option hidden>Select Location</option>
              {dataLocation.map((city) => (
                <>
                  <option value={city.nama} key={city.id}>
                    {city.nama}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <button type="submit" className="dashboard__filter-button-filter">
              Filter
            </button>
            <button className="dashboard__filter-button-reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
  premiere: state.premiere
});

const mapDispatchToProps = {
  getAllMovie,
  getAllPremiere,
  getDashboard
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFilter);
