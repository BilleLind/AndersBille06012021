//initialicering af express, efterfulgt at skabelse af et app object med express funktionerne
const express = require('express');
const app = express();
const path = require('path')
//her initialiceres mongoose 
const mongoose = require('mongoose')
//const htmlRouter = require('./routes/html')

//.connect bruges til at skabe forbindelse til mongodb
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser:true, useUnifiedTopology:true});
//en lille test af mongoose forbindelsen
const myTestModel = mongoose.model('Test', new mongoose.Schema({name: String}));



// her skabes router forbindelserne
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

//her kobles routerne til selve appen
app.use('/patient', patientRouter);
app.use('/nyheder', nyhederRouter);
app.use('/behandling', behandlingRouter);

module.exports = app;