const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URi, () => {
  console.log("connected to NetflixDB database");
});

