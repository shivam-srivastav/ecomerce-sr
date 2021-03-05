const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://beast1534:dEoXOk37HDjzhvQ6@cluster0.kellf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database for Automatic Attendence System is connected"))
  .catch((err) => {
    console.error("Connection Error", err.message);
  });

const db = mongoose.connection;
module.exports = db;
