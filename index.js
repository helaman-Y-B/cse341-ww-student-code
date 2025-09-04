const express = require("express");
const mongodb = require("./mongodb/connection.js");
const mainController = require("./controllers/indexController.js")
const professionalRoute = require("./routes/professionalRoute.js");

const app = express();

app.set("view engine", "html");
app.set("frontend", __dirname + "/frontend");

app.use(express.static(__dirname + "/frontend"));
app.use("/professional", professionalRoute);
//app.get("/", mainController.displayUserData);

mongodb.run((error) => {
  if (!error) {
      app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  } else {
    console.error("Error connecting to MongoDB:", error);
  }
})
