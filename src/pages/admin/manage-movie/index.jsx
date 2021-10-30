import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Pagination from "react-paginate";
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
        <section className="manage__movie-pagination">
          <div>
            <Pagination
              previousLabel={null}
              nextLabel={null}
              breakLabel={"..."}
              pageCount={1}
              onPageChange={2}
              containerClassName={"schedule__pagination"}
              activeClassName={"schedule__pagination-button"}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withRouter(ManageMovie);
