import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import MovieImage from "../../../assets/img/movies1.png";
import MovieImageData from "../../../assets/img/movies2.png";
import Pagination from "react-paginate";

import "./index.css";
export default function ManageMovie() {
  return (
    <>
      <Navbar />
      <main className="manage__movie">
        <section className="manage__movie-form">
          <h5 className="manage__movie-form-title">Form Movie</h5>
          <div className="manage__movie-form-card">
            <div className="manage__movie-form-card-body">
              <div className="manage__movie-form-card-image-parent">
                <img
                  src={MovieImage}
                  className="manage__m ovie-form-image img-fluid"
                  alt="Movies"
                />
              </div>
              <div className="row manage__movie-form-card-container">
                <div className="col-md-6">
                  <label htmlFor="title">Movie Name</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Spider-Man: Homecoming"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Action, Adventure, Sci-Fi"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="director">Director</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Jon Watts"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="casts">Casts</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="releaseDate">Release Date</label>
                  <input type="date" className="manage__movie-form-card-input" name="" id="" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="durationHour">Duration Hour</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="2"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="durationMinute">Duration Minute</label>
                  <input
                    type="text"
                    className="manage__movie-form-card-input"
                    placeholder="13"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <h6 style={{ margin: "20px 0px 10px 0px" }}>Synopsis</h6>
            <div>
              <input
                type="text"
                className="manage__movie-form-card-synopsis"
                placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he
lives with his Aunt May, | "
              />
            </div>
            <div className="manage__movie-form-card-container-button">
              <button className="manage__movie-card-button">Reset</button>
              <button className="manage__movie-card-button-active">Submit</button>
            </div>
          </div>
        </section>
        <section className="manage__movie-list">
          <div className="manage__movie-list-container">
            <div className="manage__movie-list-row">
              <div className="manage__movie-list-column">
                <h5>Data Movie</h5>
              </div>
              <div className="manage__movie-list-column">
                <select className="manage__movie-list-sort">
                  <option hidden>Sort</option>
                </select>
                <input
                  type="text"
                  className="manage__movie-list-search"
                  placeholder="Search Movie Name..."
                />
              </div>
            </div>
            <div className="manage__movie-list-card">
              <div className="manage__movie-list-card-body">
                <img
                  src={MovieImageData}
                  className="manage__movie-list-card-image img-fluid"
                  alt="Movies"
                />
                <span className="manage__movie-list-card-title-movie">Black Widow</span>
                <span className="manage__movie-list-card-category-movie">
                  Action, Adventure, Sci-Fi
                </span>
                <button className="manage__movie-list-card-button-update">Update</button>
                <button className="manage__movie-list-card-button-delete">Delete</button>
              </div>
              <div className="manage__movie-list-card-body">
                <img
                  src={MovieImageData}
                  className="manage__movie-list-card-image img-fluid"
                  alt="Movies"
                />
                <span className="manage__movie-list-card-title-movie">Black Widow</span>
                <span className="manage__movie-list-card-category-movie">
                  Action, Adventure, Sci-Fi
                </span>
                <button className="manage__movie-list-card-button-update">Update</button>
                <button className="manage__movie-list-card-button-delete">Delete</button>
              </div>
              <div className="manage__movie-list-card-body">
                <img
                  src={MovieImageData}
                  className="manage__movie-list-card-image img-fluid"
                  alt="Movies"
                />
                <span className="manage__movie-list-card-title-movie">Black Widow</span>
                <span className="manage__movie-list-card-category-movie">
                  Action, Adventure, Sci-Fi
                </span>
                <button className="manage__movie-list-card-button-update">Update</button>
                <button className="manage__movie-list-card-button-delete">Delete</button>
              </div>
              <div className="manage__movie-list-card-body">
                <img
                  src={MovieImageData}
                  className="manage__movie-list-card-image img-fluid"
                  alt="Movies"
                />
                <span className="manage__movie-list-card-title-movie">Black Widow</span>
                <span className="manage__movie-list-card-category-movie">
                  Action, Adventure, Sci-Fi
                </span>
                <button className="manage__movie-list-card-button-update">Update</button>
                <button className="manage__movie-list-card-button-delete">Delete</button>
              </div>
              <div className="manage__movie-list-card-body">
                <img
                  src={MovieImageData}
                  className="manage__movie-list-card-image img-fluid"
                  alt="Movies"
                />
                <span className="manage__movie-list-card-title-movie">Black Widow</span>
                <span className="manage__movie-list-card-category-movie">
                  Action, Adventure, Sci-Fi
                </span>
                <button className="manage__movie-list-card-button-update">Update</button>
                <button className="manage__movie-list-card-button-delete">Delete</button>
              </div>
              <div className="manage__movie-list-card-body">
                <img
                  src={MovieImageData}
                  className="manage__movie-list-card-image img-fluid"
                  alt="Movies"
                />
                <span className="manage__movie-list-card-title-movie">Black Widow</span>
                <span className="manage__movie-list-card-category-movie">
                  Action, Adventure, Sci-Fi
                </span>
                <button className="manage__movie-list-card-button-update">Update</button>
                <button className="manage__movie-list-card-button-delete">Delete</button>
              </div>
            </div>
          </div>
        </section>
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
