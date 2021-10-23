import React, { Component } from "react";
import "./movie-detail.css";
import DetailMovie from "../../../components/DetailMovie";
import ScheduleMovie from "../../../components/ScheduleMovie";
import SchedulePagination from "../../../components/SchedulePagination";

class MovieDetail extends Component {
  render() {
    const { movieId } = this.props.match.params;
    return (
      <>
        <main className="main__detail-movie">
          <DetailMovie />
          <ScheduleMovie id={movieId} />
          <SchedulePagination />
        </main>
      </>
    );
  }
}

export default MovieDetail;
