const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/subscriptionDB", () => {
  console.log("connected to subscriptionDB database");
});

// mongoose.connect("mongodb://localhost:27017/userDB", () => {
//   console.log("connected to userDB database");
// });


