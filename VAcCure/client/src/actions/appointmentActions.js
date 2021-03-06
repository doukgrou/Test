import axios from "axios";
import { GET_ERRORS } from "./types";


// newApoointmet
export const newAppointment = (vaccinationData, history) => dispatch => {
  axios
    .post("/api/vaccinations/appointments", vaccinationData)
    .then(res => history.push("/dashboard")).catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};