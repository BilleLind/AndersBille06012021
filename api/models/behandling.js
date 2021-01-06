const mongoose = require('mongoose');

const behandling = mongoose.Schema({
    _id: {type: String, required:true},
    Type: {type:String, required:true},
    Pris:{type:Number, required:true},
    Dato: {type:Date, required:true}
})


module.exports = mongoose.model('Behandling', behandling)