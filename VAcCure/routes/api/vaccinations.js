const { response } = require("express");
const express = require("express");
const router = express.Router();


const Vaccination = require("../../models/Vaccination");
const appoinment = require("../../validation/appointment");


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
                address: req.body.address,
                dateOfBirth: req.body.dateOfBirth,
                dateDose1: req.body.dateDose1,
                dateDose2: req.body.dateDose2,
                doseOneCompleted: req.body.doseOneCompleted,
                doseTwoCompleted: req.body.doseTwoCompleted,
                vaccineBrand: req.body.vaccineBrand,
                stage: req.body.stage,
                comments: req.body.comments,
                symptoms: req.body.symptoms
            })

            try{
                newVaccination.save().then(vaccination => res.json(vaccination));
            }catch(error){
                return res.json(error);
            }

        }

    });


});

router.put("/appointments", (req, res) => {

    Vaccination.updateOne({ _id: req.body._id }, req.body, message => {
        if (!message) {
           return res.json({message: 'updated.'});
        }else{
            return res.json({error: message});
        }
    });

});



router.get("/appointments", (req, res) => {

    if(req.body.amka)
    {
        const amka = req.body.amka
        Vaccination.findOne({ amka }).then(vaccination => {
            if (!vaccination) {
                return res.status(404).json({ vaccinationnotfound: "error" });
            }
            res.json({ firstName: vaccination })
        });
    }
    else if(req.body.firstName && req.body.lastName)
    {
        const firstName = req.body.firstName
        const lastName = req.body.lastName

        Vaccination.find({firstName, lastName} ).then(vaccinationRecords => {
            
            if (!vaccinationRecords) {
                return res.status(404).json({ vaccinationnotfound: "error" });
            }
            
            res.json({ records : vaccinationRecords });

        });
    }
    else if(req.body.searchDate)
    {
        const dateDose1 = req.body.searchDate;
        const dateDose2 = req.body.searchDate;

        Vaccination.find({$or:[{dateDose1 : dateDose1},{dateDose2 : dateDose2}]}).then(vaccinationRecords => {

            if (!vaccinationRecords) {
                return res.status(404).json({ vaccinationnotfound: "error" });
            }
            
            res.json({ records : vaccinationRecords });

        });

    }
    else
    {
        return res.json({error : "empty request"});
    }

});

module.exports = router;
