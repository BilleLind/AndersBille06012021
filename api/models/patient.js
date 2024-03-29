const mongoose = require("mongoose");

const patient = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  navn: {type:String, required:true },
  foedselsdato: {type: String},
  eMail: {type: String}
});

module.exports = mongoose.model("Patient", patient);
