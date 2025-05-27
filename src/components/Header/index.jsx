import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/Morse.png";

export default function Header() {
  return (
    <div
        className=" container-fluig border-0 " 
        style={{ background:'black' }}
      >
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container">
            <Link to={'/'}>
            <img src={logo} alt="" className="img-fluid"               
            style={{height:'80px',width:'120px',objectFit: 'cover'}}/>
            
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
                {/* <li className="nav-item" >
                  <Link  className="nav-link active" aria-current="page" to={""}>
                    Sign In
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}
