import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
      <b>Hey there,</b> {user.email.split()}
        <div className="row">
          <div className="col s12 center-align">
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
            <p>
              <b>Number of Vaccines for the day</b>
              <br />
              <b>Number of Vaccines for the week</b> 
              <br />
            </p>
            </div>
            <div>
            <h4>Vaccinations on 25/04/2021</h4>            
            <table class="table">
    <thead>
      <tr>
        <th>No:</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>AMKA</th>
        <th>Age</th>
        <th>Dose 1</th>
        <th>Dose 2</th>
        <th>Stage Of Vaccination</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Lora</td>
        <td>Smith</td>
        <td>6887</td>
        <td>60</td>
        <td>Yes</td>
        <td>No</td>
        <td>Semicompleted</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Christine</td>
        <td>Edward</td>
        <td>4787</td>
        <td>70</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>3</td>
        <td>John</td>
        <td>Lewis</td>
        <td>5767</td>
        <td>50</td>
        <td>No</td>
        <td>No</td>
        <td>Uncompleted</td>
      </tr>
    </tbody>
  </table>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
