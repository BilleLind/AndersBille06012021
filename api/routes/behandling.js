const express = require('express');
//router er en internt funktion fra express som gør det muligt at gøre sin application mere overskueligt ved at kunne 
//åbne tråde som lytter på et specifikt path i forskellige mapper
const router = express.Router();
const behandling = require('../../public/json/behandling.jso')

//her er opsat en get request modtagelse på /patient/ hvori jeg sender et behandlings objekt tilbage.
router.get('/', (req,res, next)=>{
    res.status(200).json({
        behandling
    })
})
//her sker det samme bare på et specifikt id => hvor jeg antager 0 er den første og 1 det andet objekt
router.get('/:id', (req,res, next)=>{
    var result =patient.patient[req.params.id]

    res.status(200).json({
        result
    })
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message: "Operation gennemført"
    })
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


module.exports = router