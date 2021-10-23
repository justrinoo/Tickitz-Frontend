import React, { Component } from "react";
import qs from "query-string";
export class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: this.props.match.params.movieId
    };
  }
  componentDidMount() {
    // [1]
    // const urlParams = qs.parse(this.props.location.search);
    // console.log(this.props.location.search);
    // console.log(urlParams.movieId);
    // [2]
    // console.log(this.props.location.state);
    // [3]
    // const idParams = this.props.match.params;
    // console.log(this.props.match.params);
    // console.log(idParams);
  }
  render() {
    console.log(this.state);
    return (
      <>
        <h2>DetailMovie Page</h2>
      </>
    );
  }
}

export default DetailMovie;
