const express = require('express');
const app = express();
const path = require('path')

//const htmlRouter = require('./routes/html')
const patientRouter = require('./routes/patient')
const behandlingRouter =require('./routes/behandling')
const nyhederRouter = require('./routes/nyheder')

app.use(express.static('public'))

app.get('/', (req,res,next)=>{
    res.sendFile(path.join(__dirname+'/public/html/forside.html'))
})

app.get('/API', (req,res,next)=>{
    res.sendFile(path.join(__dirname+'/public/html/API.html'))
})
app.get('/kontakt', (req,res,next)=>{
    res.sendFile(path.join(__dirname+'/public/html/Kontakt.html'))
})

//app.use('/',htmlRouter)

app.use('/patient', patientRouter);
app.use('/nyheder', nyhederRouter);
app.use('/behandling', behandlingRouter);

module.exports = app;