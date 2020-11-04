import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fixed.css";
import "./login.css";

const Login = () => {
  return (
    <div>
      <html lang="en">
        <head></head>

        <body data-spy="scoll" data-target="#navbarResponsive">
          <div id="home">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
              <Link className="navbar-brand" href="">
                <img src="img/download3.png" alt="logo"></img>
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

            <div className="container" id="input-form" height="400">
              <div className="row justify-content-center">
                <h1>Already a member? Login to add your startup.</h1>
              </div>
              <form action="form-group col-md-8">
                <label for="">Email Address</label>
                <br></br>
                <input
                  type="text"
                  className="form-control col-md-10"
                  placeholder="Email Address"
                ></input>
                <br></br>
                <label for="">Password</label>
                <input
                  type="text"
                  className="form-control col-md-10"
                  placeholder="Password"
                ></input>
                <br></br>
                <button className="btn btn-primary" role="button">
                  Sign up
                </button>
              </form>
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
                    <i class="fab fa-instagram"></i>
                  </Link>
                  <Link href="" target="blank">
                    <i class="fab fa-linkedin"></i>
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

export default Login;
