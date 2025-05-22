import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import waves from "../../assets/images/waves.mp4";
import clockImage from "../../assets/images/image (12).png";
import clockVideo from "../../assets/images/clock.mp4";
export default function Dashboard() {
  return (
    <>
      <div
        className="main-banner container-fluig border-0"
        style={{ minHeight: "100vh" }}
      >
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container">
            <Link to={'/'}>
            <img src={logo} alt="" className="img-fluid" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ps-5"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/about"}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={""}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Community
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={""}>
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={""}>
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to={""}>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={""}>
                    Careers
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={""}>
                    Get Started
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link  className="nav-link active" aria-current="page" to={""}>
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section className="overflow-hidden">
        <div className="py-60 position-realtive">
          <div className="container">
            <div className="video-wrapper">
              <div className="background-image-wrapper">
                <video
                  className="position-absolute inset-0"
                  width="1920"
                  height="1185"
                  autoplay=""
                  loop=""
                  playsinline=""
                  style={{ opacity: 1 }}
                >
                  <source src={waves} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-section">
        <div className="custom-container">
          <div className="custom-text-wrapper">
            <h2 className="custom-heading">Join the Movement</h2>
            <p className="custom-paragraph">
              Unlock the future of productivity with Huly.
              <br />
              Remember, this journey is just getting started.
            </p>
            <div className="custom-button-wrapper">
              {/* <!-- <div className="custom-button-wrapper"> --> */}
              <div className="custom-border-glow"></div>
              <div className="custom-border-glow custom-border-glow-reverse"></div>

              <Link className="custom-button" to={""}>
                <div className="custom-button-bg">
                  <div className="custom-glow-circle"></div>
                  <div className="custom-glow-gradient"></div>
                </div>
                <span>Start now</span>
              </Link>
              {/* <!-- </div> --> */}

              <Link
                className="custom-btn-slack"
                to="https://huly.link/slack"
                target="_blank"
              >
                <img
                  src="/_next/static/media/68af230db56f9e75d64156987f7e1b09.svg"
                  alt=""
                />
                <span>Join our Slack</span>
              </Link>
            </div>
          </div>

          <img className="custom-image-desktop" src={clockImage} alt="" />

          <div className="custom-video-container">
            <video autoPlay loop muted playsInline>
              <source src={clockVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <div className="bottom-bar">
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className="copyrightText">
              Copyright © 2025 Huly Labs. All rights reserved.
            </p>
            <div className="d-flex justify-content-center gap-4 align-items-center">
              <Link to={'/terms-and-conditions'} className="copyrightText">Terms of Service</Link>
              <Link to={'/privacy-policy'} className="copyrightText">Privacy Policy</Link>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
