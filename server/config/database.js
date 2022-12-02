const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URi, () => {
  console.log("connected to nextDB database");
});

// "mongodb://localhost:27017/cinemaDB"
