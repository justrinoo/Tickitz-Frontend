import React, { Component } from "react";
import LogoTickitz from "../../assets/img/Logo.svg";
import { Search } from "react-bootstrap-icons";
import { Link, withRouter } from "react-router-dom";
import Profile from "../../assets/img/Profile.png";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      searchMenu: false,
      show: false,
      search: ""
    };
  }
  handleMenuMobile = () => {
    return !this.state.menu ? this.setState({ menu: true }) : this.setState({ menu: false });
  };
  handleLinkSignIn = () => {
    this.props.history.push("/login");
  };
  handleSearch = () => {
    this.setState({
      searchMenu: true
    });
  };
  handleProfile = () => {
    if (!this.state.show) {
      this.setState({
        show: true
      });
    } else {
      this.setState({
        show: false
      });
    }
  };

  handleFindMovie = (event) => {
    this.setState({
      search: event.target.value
    });
  };
  render() {
    const token = localStorage.getItem("token");
    // console.log(this.props);
    return (
      <>
        <header>
          <nav className="navigation__homepage">
            <div className="navigation__homepage__parent">
              <div className="navigation__homepage--listmenu">
                <Link to="/" className="mx-4">
                  <img
                    src={LogoTickitz}
                    className="img-fluid mb-2 navigation__homepage--image"
                    alt="Logo"
                  />
                </Link>
                <Link to="/" className="d-none d-md-inline-block mx-5">
                  Home
                </Link>
                <Link to="/" className="mx-4 d-none d-md-inline-block">
                  Payment
                </Link>
                <Link to="/" className="mx-4 d-none d-md-inline-block">
                  Profile
                </Link>
              </div>
            </div>
            <div className="navigation__homepage__parent">
              <button
                className="navigation__homepage-button-icon-mobile d-md-none"
                onClick={this.handleMenuMobile}
              >
                <i className="bi bi-text-right fs-1 d-block d-md-none"></i>
              </button>

              <div className="mx-3 d-none d-md-inline-flex">
                <select className="navigation__homepage--option-select">
                  <option hidden>Location</option>
                  <option value="Indonesia">Indonesia</option>
                </select>
              </div>
              <div className="mx-3 d-none d-md-inline-flex">
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={this.handleSearch}
                >
                  {this.state.searchMenu ? (
                    <>
                      <input
                        type="text"
                        className="form-control d-none d-md-block"
                        placeholder="Search Movie..."
                        onChange={this.handleFindMovie}
                      />
                      {this.state.search ? (
                        <div className="navigation__homepage-search-movie">
                          <p className="text-dark fw-bold">Search: {this.state.search}</p>
                          <hr className="text-dark" />
                          <Link
                            to="/detail-movie/1"
                            className="navigation__homepage-search-movie-link text-decoration-none "
                          >
                            Spiderman: HomeComing
                          </Link>
                          <hr />
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <Search />
                  )}
                </button>
              </div>
              <div className="mx-3 d-none d-md-inline-flex">
                {token !== null ? (
                  <img
                    src={Profile}
                    className="img-fluid w-50"
                    alt="Profile"
                    onClick={this.handleProfile}
                  />
                ) : (
                  <button className="button__signup--homepage" onClick={this.handleLinkSignIn}>
                    Sign In
                  </button>
                )}
              </div>
              {this.state.show ? (
                <Link to="/logout" className="text-decoration-none text-dark fw-bold">
                  logout
                </Link>
              ) : null}
            </div>
          </nav>
          {/* <!-- Menu Mobile --> */}
          <div
            className={"navigation__homepage--mobile d-md-none p-4 position-absolute"}
            style={{ display: `${this.state.menu ? "block" : "none"}` }}
          >
            <input
              type="search"
              className="navigation__homepage--mobile__input"
              placeholder="Search..."
            />
            <div className="text-center">
              <div className="navigation__homepage--mobile-parent-link">
                <Link to="/" className="d-block d-md-none navigation__homepage--mobile-link">
                  Home
                </Link>
              </div>
              <div className="navigation__homepage--mobile-parent-link">
                <Link to="/" className="d-block d-md-none navigation__homepage--mobile-link">
                  Payment
                </Link>
              </div>
              <div className="navigation__homepage--mobile-parent-link">
                <Link to="/" className="d-block d-md-none navigation__homepage--mobile-link">
                  Profile
                </Link>
              </div>
              <p className="text-muted mt-5">&copy; 2021 Tickitz, All Rights Reserved</p>
            </div>
          </div>
          {/* <!-- Akhir Menu Mobile --> */}
        </header>
      </>
    );
  }
}

export default withRouter(Navbar);
