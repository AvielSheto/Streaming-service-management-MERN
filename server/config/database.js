const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cinemaDB", () => {
  console.log("connected to cinemaDB database");
});



