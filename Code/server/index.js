const express = require("express");
const app = express();
app.use(express.json()); // To parse the incoming requests with JSON payloads

const db = require("./models");

// set up router for handling HTTP requests related to posts on /posts route
const postRouter = require("./routes/Blogs");
app.use("/posts", postRouter); //middleware to handle requests to /posts route

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});