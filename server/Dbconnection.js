
const mongoose = require("mongoose");
require("dotenv").config();

const DB_SECRET_STRING = process.env.MONGODB_URI;


function connectionToDB() {
  mongoose
    .connect(DB_SECRET_STRING)
    .then(() => console.log("db connection successful :)"))
    .catch((error) =>
      console.log(console.log("Erro While Connection With MongoDB \n", error))
    );
}

module.exports = {connectionToDB}