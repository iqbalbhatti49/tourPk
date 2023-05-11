const express = require("express");
const router = express.Router();
const { authenticateMiddleware } = require("../middleware/auth.js");
const { addComment, deleteComment, commentByBlogPostId, updateComment } = require("../controllers/comment");

router.post("/addComment", authenticateMiddleware, addComment);
router.get("/:blogId", authenticateMiddleware, commentByBlogPostId);
router.put("/:id", authenticateMiddleware, updateComment);
router.delete("/:id", authenticateMiddleware, deleteComment);
module.exports = router;