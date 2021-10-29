import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Pagination from "react-paginate";
import "./index.css";
import FormMovie from "../../../components/FormMovie";
import DataListMovie from "../../../components/Data-MovieList";
function ManageMovie() {
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

export default ManageMovie;
