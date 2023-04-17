const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authUser");
const blogRouter = require("./routes/Blogs");
const db = require("./models");

const app = express();
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());

// set up router for handling HTTP requests related to each route
app.use("/tourpk/blogs", blogRouter); //middleware to handle requests to /Blogs route
app.use("/tourpk/auth", authRoutes);

// const PORT = process.env.PORT || 3000;  --> for production
db.sequelize.sync().then(() => {
  app.listen(3001, console.log(`Server running on port 3001`))
});