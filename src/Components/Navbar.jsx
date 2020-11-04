import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            
            <div className="row">
              <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <a className="navbar-brand" href="">
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
                    <li className="nav-item">
                      <a class="nav-link" href="index.html">
                        <Link to="./">Home</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Startups.html">
                        <Link to="./startups">Startups</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Register.html">
                        <Link to="./register">Register</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Login.html">
                        <Link to="./login">Login</Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div> 
        </div>
    );
}

export default Navbar;
