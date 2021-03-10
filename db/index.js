const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://beast1534:dEoXOk37HDjzhvQ6@cluster0.kellf.mongodb.net/ecommercesr?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database for E-commerce is connected"))
  .catch((err) => {
    console.error("Connection Error", err.message);
  });

const db = mongoose.connection;
module.exports = db;
