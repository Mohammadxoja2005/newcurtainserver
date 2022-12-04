const express = require("express");
const app = express();
// const db = require("./models");
const cors = require("cors");
// const quote = require("./routes/quote");
const PORT = 5000;
// require("dotenv").config(); 

app.use(express.json());
app.use(cors());

// db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log("server started...");
  });
// });

// app.use("/quote", quote);

app.get("/", (req, res) => {
  res.send("hello world");
});