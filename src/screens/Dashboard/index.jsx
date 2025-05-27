import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Morse.png";
import secondLogo from '../../assets/images/Banner.mp4'
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="main-banner container-fluig border-0"
        style={{ minHeight: "100vh" }}
      >
        <div style={{top:450,position:'absolute',left:325}}>
        <video
  className="position-absolute inset-0"
  width="1920"
  height="1185"
  autoPlay
  loop
  muted
  playsInline
  style={{ height: 430, width: 900, borderRadius: 10, opacity: 1 }}
>
  <source src={secondLogo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

          {/* <img src={secondLogo} alt="Decor" className="second-image" style={{height:430,width:900,borderRadius:10}} /> */}
          </div>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container">
            <Link to={"/"}>
              <img src={logo} alt="" className="img-fluid" 
              style={{height:'80px',width:'120px',objectFit: 'cover'}}/>
            </Link>
            <div
              style={{
                position: "absolute",
                top: "200px",
                left: "80px",
                color: "#000", // Adjust text color as needed
                padding: "10px 15px",
                borderRadius: "5px",
                marginLeft: "60px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  fontFamily: "'Poppins', 'Segoe UI', sans-serif",
                  color: "white",
                }}
              >
                <h5 style={{ margin: 0, fontSize: "40px" }}>
                  Technological Acumen at your service
                </h5>
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ margin: "4px 0", fontSize: "16px" }}>
                    Code with Purpose, Consult with Insight, and Conquer every
                    Challenge.
                  </p>
                  
                </div>
              </div>

              <button
                onClick={() => {
                  navigate("/contactUs");
                }}
                type="button"
                className="btn b btn-sm d-flex align-items-center"
                style={{
                  justifyContent: "center", // ⬅️ centers content horizontally
                  gap: "5px",
                  background:
                    "linear-gradient(90deg, rgba(243, 173, 99, 0.66), #ffffff)",
                  border: "none",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "6px 12px",
                  width: "230px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  textAlign: "center",
                  marginLeft: "17px",
                }}
              >
                Get in Touch
                <span style={{ fontWeight: "bold" }}>→</span>
              </button>
            </div>
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
                  <Link className="nav-link active" aria-current="page" to={"/contactUs"}>
                    Get Started
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={""}>
                    Sign In
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section className="overflow-hidden mid-image">
        <div >
          <div className="container">
            <div className="video-wrapper">
              <div className="background-image-wrapper">
                {/* <video
                  className="position-absolute inset-0"
                  width="1920"
                  height="1185"
                  autoplay=""
                  loop=""
                  playsinline=""
                  style={{ opacity: 1 }}
                >
                  <source src={waves} type="video/mp4" />
                </video> */}
                <div  style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "#000", // Adjust text color as needed
                padding: "10px 15px",
                borderRadius: "5px",
                marginLeft: "60px",
              }}>
                <p style={{ margin: "9px 0", fontSize: "22px",color:'white' }}>
                    From Vision to Strategy, and From Strategy to Software — We
                    Build Seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
