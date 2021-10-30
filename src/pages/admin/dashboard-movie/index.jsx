import React from "react";
import ChartMovie from "../../../components/Chart";
import DashboardFilter from "../../../components/DashboardFilter";
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
          <DashboardFilter />
        </section>
      </main>
      <Footer />
    </>
  );
}
