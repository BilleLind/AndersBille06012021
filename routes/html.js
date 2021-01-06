const express = require('express');
const router = express.Router()
const path = require('path')
const fs = require('fs')



router.get('/', (req,res,next)=>{
    const forside = fs.readFileSync('forside.html')

    res.sendFile(forside)
})


module.exports = router