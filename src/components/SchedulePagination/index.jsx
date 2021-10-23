import React, { Component } from "react";

export class SchedulePagination extends Component {
  render() {
    return (
      <>
        <section className="schedule__pagination">
          <button className="schedule__pagination-button">1</button>
          <button className="schedule__pagination-button-previous">2</button>
          <button className="schedule__pagination-button-previous">3</button>
          <button className="schedule__pagination-button-previous">4</button>
        </section>
      </>
    );
  }
}

export default SchedulePagination;
