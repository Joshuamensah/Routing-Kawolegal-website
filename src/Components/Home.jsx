import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './fixed.css'
import './style.css'
const Home = () => {
  return (
    <div>
      <html lang="en">
        <head></head>

        <body data-target="#navbarResponsive">
          <div className="container-fluid">
            <div className="row">
              <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <a className="navbar-brand" >
                  <img src="img/download3.png" alt="logo" />
                </a>
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
                  <li class="nav-item"><a class="nav-link" href="./">Home</a></li>
                  <li class="nav-item">
							<a class="nav-link" href="./startups.jsx">Startups</a>
						</li>
            <li class="nav-item">
							<a class="nav-link" href="./register.jsx">Register</a>
						</li>
            <li class="nav-item">
							<a class="nav-link" href="./login">Login</a>
						</li>
                  </ul>
                </div>
              </nav>
            </div>

            <div>
              <div className="landing">
                <div className="home-wrap">
                  <div className="home-inner"></div>
                </div>
              </div>
              <div className="caption text-center">
                <h1>KAWOLEGAL</h1>
                <h3>
                  A collaborative ecosystem for problem solvers and support for
                  Startups
                </h3>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="./Register"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </body>
        <footer className="mb-2 mt-2">
          <div className="container">
            <div className="row">
              <p className="text-left col-8 pt-4">
                &copy; 2017 kawolegal. All rights Reseverved
              </p>

              <div className="row col-4 ml-2 mt-2">
                <div className="row justify-content-center">
                  <div className="d-inline-block bg-muted mx-2">
                    <a href="" target="blank">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="" target="blank">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="" target="blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" target="blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </html>
    </div>
  );
};

export default Home;
