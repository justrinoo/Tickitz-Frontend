import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoTickitz from "../../assets/img/Logo.svg";
import LogoHiflix from "../../assets/img/Sponsor1.png";
import LogoEbuId from "../../assets/img/Sponsor2.png";
import LogoCineOne21 from "../../assets/img/Sponsor3.png";
import LogoTwitter from "../../assets/img/Icon-1.svg";
import LogoFacebook from "../../assets/img/Icon-2.svg";
import LogoInstagram from "../../assets/img/Icon-3.svg";
import LogoYoutube from "../../assets/img/Icon-4.svg";

class Footer extends Component {
  render() {
    return (
      <>
        {/* <!-- Footer --> */}
        <footer className="footer__tickitz">
          <div className="row">
            <div className="col-md-3">
              <div className="footer__tickitz--brand">
                <img src={LogoTickitz} alt="Logo" />
                <span className="footer__tickitz--desc">
                  Stop waiting in line. Buy tickets conveniently, watch movies quietly.
                </span>
              </div>
            </div>
            <div className="footer__tickitz--explore col-md-3">
              <h6 className="fw-bold">Explore</h6>
              <div className="footer__tickitz--explore--menu d-flex flex-sm-column-reverse flex-md-column mt-3">
                <Link to="/" className="text-decoration-none footer__tickitz--link lh-lg">
                  Cinemas
                </Link>
                <Link to="/" className="text-decoration-none footer__tickitz--link">
                  Movies List
                </Link>
                <Link to="/" className="text-decoration-none footer__tickitz--link">
                  My Ticket
                </Link>
                <Link to="/" className="text-decoration-none footer__tickitz--link">
                  Notification
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__tickitz--sponsor_mobile">
                <h6 className="fw-bold">Our Sponsors</h6>
                <div className="footer__tickitz--sponsor_mobile-column d-flex flex-sm-column flex-md-column mt-3">
                  <Link to="/">
                    <img
                      src={LogoHiflix}
                      className="footer__tickitz--sponsor img-fluid"
                      alt="Sponsor"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src={LogoEbuId}
                      className="footer__tickitz--sponsor img-fluid mt-3"
                      alt="Sponsor"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src={LogoCineOne21}
                      className="footer__tickitz--sponsor img-fluid mt-4"
                      alt="Sponsor"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__tickitz--title-follow-us_mobile">
                <h6 className="fw-bold">Follow Us</h6>
                <div className="d-flex flex-sm-column flex-md-column">
                  <div className="d-flex align-items-center">
                    <img
                      src={LogoTwitter}
                      className="img-fluid footer__tickitz--icon-link"
                      width="20"
                      alt="Twitter"
                    />
                    <p className="footer__tickitz--title-follow-us mt-2 mx-4">tickitz.id</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src={LogoFacebook}
                      className="img-fluid footer__tickitz--icon-link"
                      width="20"
                      alt="Facebook"
                    />
                    <p className="footer__tickitz--title-follow-us mt-2 mx-4">Tickitz Cinema id</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src={LogoInstagram}
                      className="img-fluid footer__tickitz--icon-link"
                      width="20"
                      alt="Instagram"
                    />
                    <p className="footer__tickitz--title-follow-us mt-2 mx-4">tickitz.id</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src={LogoYoutube}
                      className="img-fluid footer__tickitz--icon-link"
                      width="20"
                      alt="Youtube"
                    />
                    <p className="footer__tickitz--title-follow-us mt-2 mx-4">Tickitz Cinema id</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="footer__tickitz--title-copyright mt-4">
              © 2021 Tickitz. All Rights Reserved.
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
