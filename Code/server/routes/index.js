const router = require("express").Router();
const authRoutes = require("./authUser");
const commentRoutes = require("./comment");
const blogRouter = require("./Blogs");
const helpRouter = require("./Help");
const paymentRouter = require("./Payment");
const restaurantRouter = require("./restaurant");
const travelAgentRouter = require("./travelagent");
const tourGuideRouter = require("./tourguide");
const hotelRouter = require("./hotel");
const serviceRouter = require("./service");
const reviewRouter = require("./review");
const phoneNumberVerification = require("./phoneNumberVerification");

router.use("/blog", blogRouter);
router.use("/auth", authRoutes);
router.use("/comment", commentRoutes);
router.use("/help", helpRouter);
router.use("/payment", paymentRouter);
router.use("/restaurant", restaurantRouter);
router.use("/travelAgent", travelAgentRouter);
router.use("/tourguide", tourGuideRouter);
router.use("/hotel", hotelRouter);
router.use("/review", reviewRouter);
router.use("/verify", phoneNumberVerification);
router.use("/service", serviceRouter);

module.exports = router;