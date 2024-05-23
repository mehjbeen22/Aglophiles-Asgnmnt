// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },

//   password: String,
// });

// const registrationModel = mongoose.model('registered-user', registrationSchema);

// module.exports = { registrationModel };

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const registrationModel = mongoose.model('registered-user', registrationSchema);

module.exports = { registrationModel };
