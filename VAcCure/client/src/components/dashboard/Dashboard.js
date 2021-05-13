import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div  className="container valign-wrapper" style={{width:"100%", display: "flex"}}>
        <div className="row">
        <div class="left">
        <div className="col s12" style={{background:"#54B8C5",right:"0",left:"0",width: "1440px", height:"130px"}}>
        <div class="center">
          <br />
          <b style={{size: "30rem", width:"200rem"}}>Hospital Name:</b>            {user.hospitalName.split()}<br /> 
          <b style={{size: "30rem", width:"200rem"}}>The hospital is placed at: </b>{user.address.split()}   
                                            , {user.city.split()}    
                                            , {user.country.split()}<br />
          <b style={{size: "30rem", width:"200rem"}}>Phone:</b>                    {user.phone.split()}<br /> 
          <b style={{size: "30rem", width:"200rem"}}>email:</b>                    {user.email.split()}<br /> 

          
            <br />
        </div>
        </div>
        <div>
        </div>
        <div class="container">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                    <hr></hr>
            <p>
            <br /> 
          <br />
          <br /> 
          <br /> 
          
          <div class="left" style={{width:"200rem"}}>
              <h6><b>Number of Vaccines for the day:</b> 1300</h6> 
              <br />
              <h6><b>Number of Vaccines for the week:</b> 150</h6>
              <br />
          </div>
            </p>
          
                        <div class="col-sm-8">
                          <div class="center">
                          <br />
          <br /> 
          <br /> 
          <br />
          <br />
                          <h5>Vaccination appointments</h5>
                          </div>
                        </div>
                        <div class="col-sm-4 left-align">
                            <div class="search-box ">
                              <div class="left">
         
          
                                

                                <input type="text" class="form-control" placeholder="Search&hellip;"/></div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="left">
                <table class="table table-striped table-hover table-bordered" style={{background:"#D9F2F8",width:"1000px",height:"708px"}}>
                  
                    <thead>
                        <tr>
        <th width="200rem"> No:</th>
        <th width="500rem">Name</th>
        <th width="500rem">AMKA</th>
        <th width="500rem">Age</th>
        
        <th width="500rem">Stage </th>
        <th width="200rem">Action</th>
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
      <tr>
        <td>4</td>
        <td>John Lewis</td>
        <td>5767</td>
        <td>50</td>
        <td>Uncompleted</td>
        <td>
        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>John Lewis</td>
        <td>5767</td>
        <td>50</td>
        <td>Uncompleted</td>
        <td>
        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>John Lewis</td>
        <td>5767</td>
        <td>50</td>
        <td>Uncompleted</td>
        <td>
        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>John Lewis</td>
        <td>5767</td>
        <td>50</td>
        <td>Uncompleted</td>
        <td>
        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
        </td>
      </tr>
      <tr>
        <td>4</td>
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
  </div>
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
    <div className="col s6">
              <Link
                to="/newAppointment"
                style={{
                  width: "250px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft: "10rem",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                New Appointment
              </Link>
      </div>
<div class="center">
            <button
              style={{
                width: "200px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                bottom: "0",
                left:"27rem",
                margin: "auto",
                display:"inline"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            </div>
            

            <footer
          style={{position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100px",
            padding: "0 5px",
            display: "flex",
            items: "center",
            background: "#FFFFFF"
          }}>
                 <div class="container footer">
                   <div class="right">
    <div class="row">
        <div class="col-sm-12">
            <div class="row">
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-16 footer__contact-us">
                            Contact us: 2310323988
                        </div>
                        <div class="col-sm-16">
                            Email: info@vaccure.com
                        </div>
                        <div class="col-sm-12 footer__links">
             <a href="terms">Terms of Use</a> | <a href="privacy">Privacy Policy</a>
        </div>
        <div class="col-sm-12 footer__copyright">(c) VAcCure. All rights reserved</div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
   
   
</div>

</div>
    </footer>
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
