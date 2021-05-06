const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAppointmentInput(data) {
  let errors = {};

  // Convert empty fields toan  empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.surname = !isEmpty(data.surname) ? data.surname : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.AMKA = !isEmpty(data.AMKA) ? data.AMKA : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
// data.birthday = !isEmpty(data.birthday) ? data.birthday : "";
  data.brand = !isEmpty(data.brand) ? data.brand : "";
  data.stage = !isEmpty(data.stage) ? data.stage : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Surname checks
  if (Validator.isEmpty(data.surname)) {
    errors.surname = "Surname field is required";
  }

  // Gender checks
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  // AMKA checks
  if (Validator.isEmpty(data.AMKA)) {
    errors.AMKA = "AMKA field is required";
  }

  // Phone checks
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }

//   // Birthday checks
//   if (Validator.isEmpty(data.birthday)) {
//     errors.birthday = "Birthday field is required";
//   }

  // Brand checks
  if (Validator.isEmpty(data.brand)) {
    errors.brand = "Brand field is required";
  }

  // Stage checks
  if (Validator.isEmpty(data.stage)) {
    errors.stage = "Stage field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
