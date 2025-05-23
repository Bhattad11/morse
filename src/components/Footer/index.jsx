import React from 'react'
import { Link } from 'react-router-dom'
import clockImage from "../../assets/images/image (12).png";
import clockVideo from "../../assets/images/clock.mp4";

export default function Footer() {
  return (
   <>
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
  )
}
