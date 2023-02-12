const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
mongoose.set("strictQuery", false);
exports.connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://Sandeepan:12345qaz@cluster0.fvtc2wm.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true })
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
