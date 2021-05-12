const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VaccinationSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  amka: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  dateDose1: {
    type: Date,
    required: true
  },
  dateDose2: {
    type: Date,
    required: true
  },
  doseOTwoCompleted:{
    type: Boolean,
    default: false
  },
  doseOneCompleted:{
    type: Boolean,
    default: false
  },
  vaccineBrand: {
    type: String,
    required: false
  },
  symptoms: {
    type: String,
    required: false
  },
  comments: {
    type: String,
    required: false
  },
  stage: {
    type: String,
    default: "Pending"
  },
  date: {
    type: Date,
    default: Date.now
  },
  regDate: {
    type: Date,
    required: false
  }
});

module.exports = Vaccination = mongoose.model("vaccinations", VaccinationSchema);
