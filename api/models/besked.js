const mongoose = require('mongoose');

const besked =mongoose.Schema ({
    _id: {type:mongoose.Schema.Types.ObjectId,required:true},
    til: {type:mongoose.Schema.Types.ObjectId,required:true},
    fra: {type:mongoose.Schema.Types.ObjectId,required:true},
    tekst: {type:String, required:true},
    platform: {type:String},
    dato: {type:Date}
})

module.exports = mongoose.model('Besked', besked)