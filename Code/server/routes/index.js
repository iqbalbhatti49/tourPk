const Router = require("express").Router;
const authRoutes = require("./routes/authUser");
const commentRoutes = require("./routes/comment");
const blogRouter = require("./routes/Blogs");
const helpRouter = require("./routes/Help");
const paymentRouter = require("./routes/Payment");

module.exports = () => {
    Router.use("/blog", blogRouter);
    Router.use("/auth", authRoutes);
    Router.use("/comment", commentRoutes);
    Router.use("/help", helpRouter);
    Router.use("/payment", paymentRouter);

    return Router;
}