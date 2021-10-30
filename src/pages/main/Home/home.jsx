import React, { Component } from "react";
import BannerHero from "../../../assets/img/Banner-Hero.png";
import { Link } from "react-router-dom";
import ListMovies from "../../../components/List-Movies/movies";
import UpCommingMovies from "../../../components/Upcomming-Movies";
import JoinTickitz from "../../../components/JoinTickitz";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
class Home extends Component {
  render() {
    console.log(this.props);

    return (
      <>
        <Navbar />
        <main className="container mx-auto  hero">
          <div className="row">
            <section className="col-md-6 hero__spacing--column-left">
              <span className="hero__title">Nearest Cinema, Newest Movie,</span>
              <h1 className="hero__title--showmore">Find out now!</h1>
            </section>
            <section className="col-md-6 hero__spacing--column">
              <img src={BannerHero} className="img-fluid hero__image--banner" alt="Banner Hero" />
            </section>
          </div>
          {/* <!-- Akhir Hero --> */}

          {/* <!-- Movies --> */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold title__nowshowing">Now Showing</h4>
              <hr className="movies__list--line mx-auto d-none d-md-block" />
            </div>
            <div>
              <Link to="/" className="fw-bold allmovie__nowshowing">
                view all
              </Link>
            </div>
          </div>
          {/* <!-- Movies --> */}

          {/* <!-- List Movies --> */}

          <ListMovies />

          {/* <!-- Akhir List Movies --> */}

          {/* <!-- Upcomming movies --> */}
          <UpCommingMovies />
          {/* <!-- Akhir Upcomming movies --> */}

          {/* <!-- Joining Tickitz --> */}
          <JoinTickitz />
          {/* <!-- Akhir Joining Tickitz --> */}
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
