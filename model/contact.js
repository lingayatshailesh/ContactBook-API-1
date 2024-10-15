const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactData = new Schema({
  firstname : {
    type : String,
    requied : true
  },
  lastname : {
    type : String,
    requied : true
  },
  username : {
    type : String,
    requied : true,
    unique : true
  },
  email : {
    type : String,
    requied : true,
    unique : true
  },
  contactno : {
    type : Number,
    requied : true,
    unique : true
  },
  homeaddress : {
    type : String,
    requied : true
  },
  officeaddress : {
    type : String,
    requied : true
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    requied : true
  }
},
{timestamps : true});

let CONTACT = mongoose.model("contact",contactData)
module.exports = CONTACT