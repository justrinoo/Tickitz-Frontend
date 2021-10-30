import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import "./index.css";
import FormSchedule from "../../../components/FormSchedule";
import ListSchedule from "../../../components/ListSchedule";
import Pagination from "react-paginate";
export default function ManageSchedule() {
  return (
    <>
      <Navbar />
      <main className="manage__schedule">
        <FormSchedule />
        <ListSchedule />
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
      </main>
      <Footer />
    </>
  );
}
