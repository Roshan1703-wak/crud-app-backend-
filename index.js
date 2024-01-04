require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const IndexRoutes = require("./web-application/routes/IndexRoutes");
const jwt = require("./web-application/routes/jwt");

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 


app.set("view engine", "pug");
app.set("views", "./web-application/view");

app.use(express.static("./web-application/public"));
app.use("/", IndexRoutes);


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });