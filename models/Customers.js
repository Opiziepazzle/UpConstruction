const mongoose = require("mongoose");
const Customers = new mongoose.Schema({

    name: {
    type: String,
<<<<<<< HEAD
    // required: [true, "Please fill this part"],
=======
//     required: [true, "Please fill this part"],
>>>>>>> d09c36f74ca85e0d07d0adbc1e7b4fa3bcb20b3c
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
