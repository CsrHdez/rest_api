const mongoose = require("mongoose");
const config = require("dotenv").config();

const connect = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zq7pj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );

    const db = mongoose.connection;

    db.on("open", () => {
      console.warn("Connection successful");
      resolve(mongoose);
    });

    db.on("error", (error) => {
      console.error("Connection failed", error);
      reject(error);
    });
  });

module.exports = {
  connect,
};
