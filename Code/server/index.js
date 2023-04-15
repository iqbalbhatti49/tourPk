const express = require("express");
const app = express();
app.use(express.json()); // To parse the incoming requests with JSON payloads

const db = require("./models");

// set up router for handling HTTP requests related to blogs on /Blogs route
const blogRouter = require("./routes/Blogs");
app.use("/blogs", blogRouter); //middleware to handle requests to /Blogs route

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});