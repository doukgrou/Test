const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const keys = require("../../config/keys");
const Vaccination = require("../../models/Vaccination");


const appoinment = require("../../validation/appointment");


router.post("/appointments", (req, res) => {
    

    const {errors, isValid} = appoinment(req.body);


    if(!isValid){
        return res.status(400).json(errors);
    }


    Vaccination.findOne({AMKA: req.body.AMKA }).then(vaccination => {
        
        if(vaccination){
            return res.status(400).json({AMKA: "AMKA already exist"});
        } 
        else{
            
            const newVaccination = new Vaccination({
                name: req.body.name,
                surname: req.body.surname,
                gender: req.body.gender,
                AMKA: req.body.AMKA,
                phone: req.body.phone,
                birthday: req.body.birthday,
                doseOne: req.body.doseOne,
                doseOneCompleted: false,
                doseTwo: req.body.doseTwo,
                doseTwoCompleted: false,
                brand: req.body.brand,
                stage: req.body.stage
            })

            try{
                newVaccination.save().then(vaccination => res.json(vaccination));
            }catch(error){
                return res.json(error);
            }

        }

    });


});


module.exports = router;