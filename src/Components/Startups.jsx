import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fixed.css";
import "./Startups.css";

const Startups = () => {
  return (
    <div>
      <html lang="en">
        <head></head>

        <body>
          <div className="container-fluid">
            <div className="row">
              <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <Link className="navbar-brand" href="">
                  <img src="img/download3.png" alt="logo" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link class="nav-link">
                        <Link to="./">Home</Link>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">
                        <Link to="./startups">Startups</Link>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">
                        <Link to="./register">Register</Link>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">
                        <Link to="./login">Login</Link>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="row2 mt-4 pl-5">
              <div className="form-inline col-md-12 my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2 col-10"
                  type="search"
                  placeholder="seach startups by name or industry"
                ></input>
                <button
                  className="btn my-2 my-sm-0 bg-primary text-white"
                  type="submit"
                >
                  <i className="fa fa-search"></i>Search
                </button>
              </div>
            </div>
            <div>
              <div className="row mt-5 pl-5" height="690px">
                <div className="row col-3">
                  <img
                    src="img/download.png"
                    alt="Think"
                    className="img-thumbnail startup"
                  ></img>
                </div>
                <div className="container col-9 mt-3">
                  <Link href="#" className="display-3">
                    <h2>Think and Zoom</h2>
                  </Link>
                  <p className="startup-text">
                    Providing Solutions for the visually impaired,such as
                    mind-controlled zooming,and wearable controlled zooming.{" "}
                  </p>
                  <Link href="#">
                    <button className="btn btn-sm border" >
                      See full details
                    </button>
                  </Link>
                </div>
                <hr></hr>
                <div className="row col-3">
                  <img
                    src="img/download4.jpeg"
                    alt="Slatehub"
                    className="img-thumbnail startup"
                  ></img>
                </div>
                <div className="container col-9 mt-3">
                  <a href="www.facebook.com" className="display-3">
                    <h2>Slatecube</h2>
                  </a>
                  <p className="startup-text">
                    Slatecube helps job seeker dvevelop JOb_relevant skills,gain
                    work experience,and land well paying jobs through
                    world-class up-skilling course and virtual internships.
                  </p>
                  <Link href="#">
                    <button className="btn btn-sm border" >
                      See full details
                    </button>
                  </Link>
                </div>
                <hr></hr>
                <div className="row col-3">
                  <img
                    src="img/download2.png"
                    alt="Seekhub"
                    className="img-thumbnail startup"
                  ></img>
                </div>
                <div className="container col-9 mt-3">
                  <Link href="#" className="display-3">
                    <h2>Seekjob Academy</h2>
                  </Link>
                  <p className="startup-text">
                    Trains world class software developers in Ghana and matches
                    them to employent
                  </p>
                  <Link href="#">
                    <button className="btn btn-sm border" >
                      See full details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </body>

        <div className="footer mb-1 mt-4 fixed-bottom">
          <div className="container">
            <div className="row" id="close">
              <p className="text-left col-8 pt-4 text-white">
                &copy; 2017.All rights Reserved
              </p>

              <div className="row col-4 ml-2 mt-2 justify-content-center">
                <div className="d-inline-block bg-muted mx-2">
                  <Link href="" target="blank">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                  <Link href="" target="blank">
                    <i className="fab fa-twitter-square"></i>
                  </Link>
                  <Link href="" target="blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="" target="blank">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </html>
    </div>
  );
};

export default Startups;
