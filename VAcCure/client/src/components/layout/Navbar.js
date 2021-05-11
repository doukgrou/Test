import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="navbr">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <img id='logo' src= "Vaccure.png" alt="Vaccure" width = "128" height="64" ></img>


            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
