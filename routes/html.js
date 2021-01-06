const express = require('express');
const router = express.Router()
const path = require('path')




router.get('/', (req,res,next)=>{
    console.log('hej')
    res.sendFile('\public\html\forside.html')
})


module.exports = router