const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userData = new Schema({
  username : {
    type : String,
    requied : true
  },
  email : {
    type : String,
    requied : true,
    unique : true
  },
  password : {
    type : String,
    requied : true
  }
},
{timestamps : true});

let USER = mongoose.model("users",userData)
module.exports = USER