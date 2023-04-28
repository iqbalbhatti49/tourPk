const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const authRoutes = require("./routes/authUser");
const blogRouter = require("./routes/Blogs");
const helpRouter = require("./routes/Help");
const db = require("./models");
const app = express();
require('dotenv').config();


app.use(bodyParser.json()); // parses the incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(cookieParser()); // to parse cookies attached to the client request object
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors()); // to allow cross-origin requests from the client-side app running on a different port (3000) than the server-side app (8080)
// set up router for handling HTTP requests related to each route
app.use("/tourpk/blog", blogRouter);
app.use("/tourpk/auth", authRoutes);
app.use("/help", helpRouter);


// const PORT = process.env.PORT || 3000;  --> for production
db.sequelize.sync().then(() => {
  app.listen(8080, console.log(`Server running on port 8080`))
  console.log("--------------------aaaaaaaaaaaaa--------------");
});
