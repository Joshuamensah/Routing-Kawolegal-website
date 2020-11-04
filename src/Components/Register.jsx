import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css';
import "./fixed.css"

const Register = () => {
  return (
    <div>
      <html lang="en">
        <head></head>

        <body data-spy="scoll" data-target="#navbarResponsive">
          <div id="home">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
              <a className="navbar-brand" href="">
                <img src="img/download3.png" alt="logo"></img>
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
                  <li className="nav-item">
                    <a class="nav-link" ><Link to="./">Home</Link>
                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" ><Link to="./startups">Startups</Link>
                      
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"><Link to="./register">Register</Link>
                      
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" ><Link to="./login">Login</Link>
                    
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="container  px-4 register">
              <div className="row">
                <h1>Join Kawolegal.Sign Up and get your startup listed now!</h1>
              </div>
              <br></br>
              <form className="container">
                <div className="form-group">
                  <label for="exampleinputemail">
                    <h5>FULL NAME</h5>
                  </label>
                  <input
                    type="text"
                    class="form-control col-10"
                    id="exampleinputname"
                    placeholder="Enter full name"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="exampleinputemail">
                    <h5>EMAIL ADDRESS</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control col-10"
                    id="exampleinputemail"
                    placeholder="Enter email"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="exampleinputemail" className="bold">
                    <h5>PASSWORD</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control col-10"
                    id="exampleinputPassword"
                    placeholder="Enter Password"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="exampleinputemail" className="bold">
                    <h5>CONFIRM PASSWORD</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control col-10"
                    id="exampleinputconfirmspassword"
                    placeholder="confirm Password"
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary" role="button">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </body>
        <div className="footer mb-1 mt-4 fixed-bottom">
          <div className="container">
            <div className="row" id="close">
              <p class="text-left col-8 pt-4 text-white">
                &copy; 2017.All rights Reserved
              </p>

              <div class="row col-4 ml-2 mt-2 justify-content-center">
                <div class="d-inline-block bg-muted mx-2">
                  <a href="" target="blank">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="" target="blank">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a href="" target="blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="" target="blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </html>
    </div>
  );
};

export default Register;
