import React from "react";
import { ChartMovie } from "../../../components/Chart";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import "./index.css";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="dashboard__main">
        <section className="dashboard__chart">
          <h3>Dashboard</h3>
          <ChartMovie />
        </section>
        <section className="dashboard__filter">
          <h3>Filtered</h3>
          <div className="dashboard__filter-container">
            <div className="mb-4">
              <select className="dashboard__filter-movie">
                <option hidden>Select Movie</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="dashboard__filter-premiere">
                <option hidden>Select Premiere</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="dashboard__filter-location">
                <option hidden>Select Location</option>
              </select>
            </div>
            <div className="mb-4">
              <button className="dashboard__filter-button-filter">Filter</button>
              <button className="dashboard__filter-button-reset">Reset</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
