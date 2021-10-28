import React, { Component } from "react";
import "./movie-detail.css";
import DetailMovie from "../../../components/DetailMovie";
import ScheduleMovie from "../../../components/ScheduleMovie";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

class MovieDetail extends Component {
  render() {
    const { movieId } = this.props.match.params;
    return (
      <>
        <Navbar />
        <main className="main__detail-movie">
          {!movieId ? (
            <p> Error</p>
          ) : (
            <>
              <DetailMovie />
              {movieId && <ScheduleMovie id={movieId} />}
            </>
          )}
        </main>
        <Footer />
      </>
    );
  }
}

export default MovieDetail;
