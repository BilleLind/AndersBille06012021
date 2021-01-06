const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();
const Patient = require('../models/patient')

router.get('/', (req,res, next)=>{
    
    Patient.find().exec().then((pJson =>{
        const svar = {
            besked: "Det lykkes at modtage filerne",
            data: pJson
        }
        res.status(200).json(svar)
    })).catch((err =>{
        res.status(500).json({besked: err})
    }))
})
router.get('/:id', (req,res, next)=>{

    Patient.findOne(req.body._id).exec().then((pJson =>{
        res.status(200).json({
            pJson
        })
    })).catch((err =>{
        res.status(500).json({besked: err})
    }))
    
})

router.post('/',(req,res,next)=>{
    //her anvender jeg min model (patient) som indeholder et database schema
    //hvori der er specificeret hvad der må og skal gemmes i databasen
    const patient = new Patient({
        _id: new mongoose.Types.ObjectId(),
        navn: req.body.navn,
        foedselsdato: req.body.foedselsdato,
        eMail: req.body.eMail
    })
    patient.save().then((result =>{
        if(result){
            res.status(201).json({patient:result,
            besked: 'patient oprettet'})
        } else{
            res.status(404).json({message:'fejl under oprettelse af patient'})
        }
    })).catch((err =>{
        res.status(500).json({besked: err})
    }))
})

router.delete('/',(req,res,next)=>{
    res.status(201).json({
        message: "Det er ikke tilladt at slette alt, angiv et id"
    })
})
router.delete('/:id',(req,res,next)=>{
    res.status(201).json({
        message: "Operation gennemført"
    })
})
router.put('/',(req,res,next)=>{
    res.status(201).json({
        message: "Operation gennemført",
        path: req.params
    })
})



module.exports = router;