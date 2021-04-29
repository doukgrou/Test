import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <img src="Vaccure.png" alt="VAcCure"></img>
            </Link>
          </div>
        </nav>
    );
  }
}

export default Navbar;
