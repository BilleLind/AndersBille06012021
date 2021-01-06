const express = require('express');
const router = express.Router();
const besked = require('../public/json/besked.json')


router.get('/', (req,res, next)=>{
    res.status(200).json({
        besked
    })
})
router.get('/:id', (req,res, next)=>{
    res.status(200).json({
        message:"get => /nyheder"
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

module.exports = router;