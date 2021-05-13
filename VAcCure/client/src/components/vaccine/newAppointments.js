import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newAppointment } from "../../actions/authActions";
import classnames from "classnames";

class NewAppointment extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName : "",
      amka : "",
      dateOfBirth : "",
      address : "",
      dateDose1: "",
      dateDose2: "",
      vaccineBrand: "",
      password2: "",
      isDoseOneCompleted: "",
      isDoseTwoCompleted: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/newAppointment");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      amka: this.state.amka, 
      dateOfBirth: this.state.dateOfBirth, 
      address: this.state.address,
      dateDose1: this.state.dateDose1,
      dateDose2: this.state.dateDose2,
      vaccineBrand: this.state.vaccineBrand,
      
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Insert New Appointment</b> below
              </h4>
              <br></br>
              <br></br>
              <p className="black-text text-darken-1"style={{ paddingLeft: "8.5rem" }}>
                <b>Citizen's card: </b>
              </p>
            </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="col s8 offset-s2" style={{ backgroundColor: "#D9F2F8", width: "500px"}}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.firstName}
                  error={errors.firstName}
                  id="firstName"
                  type="text"
                  className={classnames("", {
                    invalid: errors.firstName
                  })}
                />
                <label htmlFor="firstName"><b className="black-text text-darken-1">First Name</b></label>
                <span className="red-text">{errors.firstName}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.lastName}
                  error={errors.lastName}
                  id="lastName"
                  type="text"
                  className={classnames("", {
                    invalid: errors.lastName
                  })}
                />
                <label htmlFor="lastName"><b className="black-text text-darken-1">Last Name</b></label>
                <span className="red-text">{errors.lastName}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.amka}
                  error={errors.amka}
                  id="amka"
                  type="text"
                  className={classnames("", {
                    invalid: errors.amka
                  })}
                />
                <label htmlFor="amka"><b className="black-text text-darken-1">AMKA:</b></label>
                <span className="red-text">{errors.amka}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.dateOfBirth}
                  error={errors.dateOfBirth}
                  id="dateOfBirth"
                  type="date"
                  className={classnames("", {
                    invalid: errors.dateOfBirth
                  })}
                />
                <label htmlFor="dateOfBirth"><b className="black-text text-darken-1">Date of Birth</b></label>
                <span className="red-text">{errors.dateOfBirth}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                  id="address"
                  type="text"
                  className={classnames("", {
                    invalid: errors.address
                  })}
                />
                <label htmlFor="address"><b className="black-text text-darken-1">Full Address</b></label>
                <span className="red-text">{errors.address}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.dateDose1}
                  error={errors.dateDose1}
                  id="dateDose1"
                  type="date"
                  className={classnames("", {
                    invalid: errors.dateDose1
                  })}
                />
                <label htmlFor="dateDose1"><b className="black-text text-darken-1">Date of Dose-1</b></label>
                <span className="red-text">{errors.dateDose1}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.dateDose2}
                  error={errors.dateDose2}
                  id="dateDose2"
                  type="date"
                  className={classnames("", {
                    invalid: errors.dateDose2
                  })}
                />
                <label htmlFor="dateDose2"><b className="black-text text-darken-1"><b className="black-text text-darken-1">Date of Dose-2</b></b></label>
                <span className="red-text">{errors.dateDose2}</span>
                <hr  style={{
                 width: "455px",
                 borderColor: "black",

                 backgroundColor: "black",
                 marginRight: "7rem",
                 marginTop: "2rem"
                  }}>           
                </hr>
              </div>
              
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.vaccineBrand}
                  error={errors.vaccineBrand}
                  id="vaccineBrand"
                  type="text"
                  className={classnames("", {
                    invalid: errors.vaccineBrand
                  })}
                />
                <label htmlFor="vaccineBrand"><b><b className="black-text text-darken-1">Vaccine's Brand</b></b></label>
                <span className="red-text">{errors.vaccineBrand}</span>
                <hr  style={{
                 width: "455px",
                 borderColor: "black",

                 backgroundColor: "black",
                 marginRight: "7rem",
                 marginTop: "3rem"
                  }}>           
                </hr>
                <br></br>
                <span><b><b className="black-text text-darken-1">Dose1: </b></b></span>
                <br></br>
                <br></br>
                <span><b><b className="black-text text-darken-1">Dose2: </b></b></span>
                <hr  style={{
                 width: "455px",
                 borderColor: "light-grey",

                 backgroundColor: "black",
                 marginRight: "7rem",
                 marginTop: "2rem"
                  }}>           
                </hr>
              </div>
              <span><b><b className="black-text text-darken-1">Symptoms: </b></b></span> 
               <textarea name="symptoms" id="" style={{ backgroundColor: "white", width: "370px", height: "130px", marginLeft: "6rem"}} >
               </textarea>

                <hr  style={{
                 width: "455px",
                 borderColor: "light-grey",

                 backgroundColor: "black",
                 marginRight: "7rem",
                 marginTop: "2rem"
                  }}>           
                </hr>
              
               <span><b><b className="black-text text-darken-1">Comments: </b></b></span> 
               <textarea name="coments" id="" style={{ backgroundColor: "white", width: "370px", height: "130px", marginLeft: "6rem"}}>
                
               </textarea>

               <hr  style={{
                 width: "455px",
                 borderColor: "light-grey",

                 backgroundColor: "black",
                 marginRight: "7rem",
                 marginTop: "2rem"
                  }}>           
                </hr>

                <span><b><b className="black-text text-darken-1">Stage of Vaccination: </b></b></span> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              
              
              <div className="col s12" style={{ paddingLeft: "330px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "2rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable marine accent-3"
                >
                  SUBMIT
                </button>
                <br></br>
                <br></br>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

NewAppointment.propTypes = {
  newApoointmet: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { newAppointment }
)(withRouter(NewAppointment));
