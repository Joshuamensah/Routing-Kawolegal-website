import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fixed.css";
import "./style.css";
const Home = () => {
  return (
    <div>
      <html lang="en">
        <head></head>

        <body data-target="#navbarResponsive">
          <div className="container-fluid">
            <div className="row">
              <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <Link className="navbar-brand">
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
                      <Link className="nav-link" to="/"><Link to="./">Home</Link>
                        
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/startups."><Link to="./startups">Startups</Link>
                        
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register"><Link to="./register">Register</Link>
                        
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login"><Link to="./login">Login</Link>
                        
                      </Link>
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
                <Link className="btn btn-outline-light btn-lg" to="./register">
                  Register Now
                </Link>
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
        </footer>
      </html>
    </div>
  );
};

export default Home;
