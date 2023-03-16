const mongoose = require("mongoose");
const Customers = new mongoose.Schema({

    name: {
    type: String,
    // required: [true, "Please fill this part"],
   uppercase: true,
    // max: 23,
  },

  email: {
    type: String,
   // required: true,
    lowercase: true,

  },

  subject: {
    type: String, 
  },

  message: {
    type: String, 
  },
});

module.exports = mongoose.model('members', Customers)
