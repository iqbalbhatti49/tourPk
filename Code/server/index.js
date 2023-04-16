const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // To parse the incoming requests with JSON payloads

const db = require("./models");

// set up router for handling HTTP requests related to blogs on /Blogs route
const blogRouter = require("./routes/Blogs");
const helpRouter = require("./routes/Help");
app.use("/blogs", blogRouter); //middleware to handle requests to /Blogs route
app.use("/help", helpRouter);
// db.sequelize.sync().then(() => {
//    app.listen(3000, () => {
//       console.log("Server running on port 3000");
//    });
// });
app.listen(8080, () => {
   console.log("Server running on port 8080");
});
