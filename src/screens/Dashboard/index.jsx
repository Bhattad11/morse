import React from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
  return (
<>  
<div className="main-banner container-fluig border-0" style={{ minHeight: '100vh' }}>
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container">
        <img src="../../assets/images/logo.png" alt="" className="img-fluid" />
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
            style={{ '--bs-scroll-height': '100px' }}
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={""}
                >Pricing</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={""}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={""}>Action</Link></li>
                <li><Link className="dropdown-item" to={""}>Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to={""}>Something else here</Link>
                </li>
              </ul>
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
                <li><Link className="dropdown-item" to={""}>Action</Link></li>
                <li><Link className="dropdown-item" to={""}>Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to={""}>Something else here</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={""}
                >Download</Link >
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={""}
                >Get Started</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={""}
                >Sign In</Link>
            </li>
          </ul>
       
        </div>
      </div>
    </nav>
 </div>  
    <section class="overflow-hidden">
      <div class="py-60 position-realtive">
        <div class="container">
          <div class="video-wrapper">
            <div class="background-image-wrapper">
              <video
                class="position-absolute inset-0"
                width="1920"
                height="1185"
                autoplay=""
                loop=""
                playsinline=""
                style={{ opacity: 1 }}
              >
                <source src="./assets/images/waves.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="custom-section">
      <div class="custom-container">
        <div class="custom-text-wrapper">
          <h2 class="custom-heading">Join the Movement</h2>
          <p class="custom-paragraph">
            Unlock the future of productivity with Huly.<br />
            Remember, this journey is just getting started.
          </p>
          <div class="custom-button-wrapper">
            {/* <!-- <div class="custom-button-wrapper"> --> */}
            <div class="custom-border-glow"></div>
            <div class="custom-border-glow custom-border-glow-reverse"></div>

            <Link class="custom-button" to={""}>
              <div class="custom-button-bg">
                <div class="custom-glow-circle"></div>
                <div class="custom-glow-gradient"></div>
              </div>
              <span>Start now</span>
            </Link>
            {/* <!-- </div> --> */}

            <Link
              class="custom-btn-slack"
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

        <img
          class="custom-image-desktop"
          src="../../assets/images/image (12).png"
          alt=""
        />
        {/* <!-- <img
          class="custom-image-mobile"
          src="/_next/static/media/cta-illustration-mobile.621dcd29.jpg"
          alt=""
        /> --> */}

        <div class="custom-video-container">
          <video autoplay loop muted playsinline>
            <source src="./images/clock.mp4" type="video/mp4" />
            {/* <!-- <source
              src="/videos/cta/clock.webm?updated=20240531154316"
              type="video/webm"
            /> --> */}
          </video>
        </div>
      </div>
    </section>
    <div class="bottom-bar">
      <div class="container">
        <div class="d-flex justify-content-between">
          <p class="copyrightText">
            Copyright © 2025 Huly Labs. All rights reserved.
          </p>
          <div class="d-flex justify-content-center gap-4 align-items-center">
            <p class="copyrightText">Terms of Service</p>
            <p class="copyrightText">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}