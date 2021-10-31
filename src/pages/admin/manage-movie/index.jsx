import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import "./index.css";
import FormMovie from "../../../components/FormMovie";
import DataListMovie from "../../../components/Data-MovieList";
import { withRouter } from "react-router-dom";

function ManageMovie(props) {
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      props.history.push("/");
    }
  }, []);
  return (
    <>
      <Navbar />
      <main className="manage__movie">
        <FormMovie />
        <DataListMovie />
      </main>
      <Footer />
    </>
  );
}

export default withRouter(ManageMovie);
