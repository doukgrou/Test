import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>      
            <ul class="navbar">
              <li><Link to="/Dashboard"> <img id='logo' src= "Vaccure.png" alt="Vaccure" width = "130" height="64" ></img></Link></li>
              <li id='right2' ><Link to="/"> <img src="https://www.iconpacks.net/icons/2/free-exit-logout-icon-2857-thumb.png" width="30" height="30"></img></Link></li>
              <li id='right1'><Link> <img src="https://www.pngkit.com/png/full/519-5197696_png-file-statistics-icon-vector-png.png" width="25" height="23"></img></Link></li>
              <li id='right'><Link to="/newAppointment"> <img src="https://freepikpsd.com/wp-content/uploads/2019/10/appointment-icon-png-1-Images-PNG-Transparent.png" width="30" height="30"></img></Link></li>
            </ul>
            
        </nav>
      </div>
    );
  }
}

export default Navbar;
