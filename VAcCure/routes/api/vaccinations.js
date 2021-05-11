const express = require("express");
const router = express.Router();


const Vaccination = require("../../models/Vaccination");
const appoinment = require("../../validation/appointment");


function setdate1(date){ 
    return new Date(date.getUTCFullYear(),date.getUTCMonth(),00,00,00,00);;
}


router.post("/appointments", (req, res) => {
    

    const {errors, isValid} = appoinment(req.body);


    if(!isValid){
        return res.status(400).json(errors);
    }


    Vaccination.findOne({amka: req.body.amka }).then(vaccination => {
        
        if(vaccination){
            return res.status(400).json({amka: "AMKA already exist"});
        }
        else{

            const newVaccination = new Vaccination({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                amka: req.body.amka,
                phone: req.body.phone,
                dateOfBirth: req.body.dateOfBirth,
                dateDose1: req.body.dateDose1,
                doseOneCompleted: false,
                dateDose2: req.body.dateDose2,
                doseTwoCompleted: false,
                vaccineBrand: req.body.vaccineBrand,
                stage: req.body.stage
            })

            newVaccination.regDate = setdate1(newVaccination.date);

            try{
                newVaccination.save().then(vaccination => res.json(vaccination));
            }catch(error){
                return res.json(error);
            }

        }

    });


});


router.get("/appointments-amka", (req, res) => {
    const amka = req.body.amka
    Vaccination.findOne({ amka }).then(vaccination => {
        if (!vaccination) {
            return res.status(404).json({ vaccinationnotfound: "error" });
        }
        res.json({
                    firstName: vaccination.firstName
                })
    });
});


router.get("/appointments-byname", (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName

    Vaccination.find({firstName, lastName} ).then(vaccinationRecords => {
        
        if (!vaccinationRecords) {
            return res.status(404).json({ vaccinationnotfound: "error" });
        }
        
        res.json({ records : vaccinationRecords });

    });
});


router.get("/appointments-byDate", (req, res) => {

    const dateDose1 = req.body.dateDose1;
    const dateDose2 = req.body.dateDose2;

    try {
        Vaccination.find({dateDose1}).then(vaccinationRecords => {
            
            
           
            
            res.json({ 
                        records : vaccinationRecords,
                    });

        });
    }catch(e){

    }


    Vaccination.find({dateDose2}).then(vaccinationRecords2 => {
            
        if (!vaccinationRecords2) {
            return res.status(404).json({ vaccinationRecords2: "error" });
        }
        
        res.json({ records : vaccinationRecords2 });

    });
});


module.exports = router;
