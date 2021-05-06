import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
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
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <b>Hospital Name:</b>            {user.hospitalName.split()}<br /> 
          <b>The hospital is placed at: </b>{user.address.split()}   
                                            , {user.city.split()}    
                                            , {user.country.split()}<br />
          <b>Phone:</b>                    {user.phone.split()}<br /> 
          <b>email:</b>                    {user.email.split()}<br /> 

          <hr></hr>
            <p>
              <b>Number of Vaccines for the day:</b>     1300
              <br />
              <b>Number of Vaccines for the week:</b>     150
              <br />
            </p>
            <br /> 
            <br /> 
            <br /> 
            <br /> 
            <br />
        </div>
        <div>
            <div class="container">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-8"><h4>Vaccination appointments</h4></div>
                        <div class="col-sm-4">
                            <div class="search-box">
                                <i class="material-icons">&#xE8B6;</i>
                                <input type="text" class="form-control" placeholder="Search&hellip;"/></div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover table-bordered" >
                  
                    <thead>
                        <tr>
        <th width="200">No:</th>
        <th width="500">Name</th>
        <th width="500">AMKA</th>
        <th width="500">Age</th>
        
        <th width="500">Stage </th>
        <th width="500">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Lora Smith</td>
        <td>6887</td>
        <td>60</td>
        <td>Semicompleted</td>
        <td>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Christine Edward</td>
        <td>4787</td>
        <td>70</td>
        <td>Completed</td>
        <td>
        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>John Lewis</td>
        <td>5767</td>
        <td>50</td>
        <td>Uncompleted</td>
        <td>
        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="clearfix">
                    <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                    <ul class="pagination">
                        <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                        <li class="page-item"><a href="#" class="page-link">1</a></li>
                        <li class="page-item"><a href="#" class="page-link">2</a></li>
                        <li class="page-item active"><a href="#" class="page-link">3</a></li>
                        <li class="page-item"><a href="#" class="page-link">4</a></li>
                        <li class="page-item"><a href="#" class="page-link">5</a></li>
                        <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
                    </ul>
                </div> 
                  </div>
            </div>
        </div>        
    </div>  
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
