const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VaccinationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  AMKA: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  doseOne: {
    type: Date
  },
  doseOneCompleted:{
    type: Boolean
    //default: doseOTwoPending = false
  },
  doseTwo: {
    type: Date
  },
  doseOTwoCompleted:{
    type: Boolean
  },
  brand: {
    type: String,
    required: true
  },
  symptoms: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Vaccination = mongoose.model("vaccinations", VaccinationSchema);
