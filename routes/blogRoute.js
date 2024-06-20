const express = require("express")
const router = express.Router()
const protect = require("../middelwares/authMiddleware")

const { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require("../controllers/blogControllers")

router.get("/", protect, getBlogs)
router.get("/:id", protect, getBlog)
router.post("/", protect, createBlog)
router.put("/:id", protect, updateBlog)
router.delete("/:id", protect, deleteBlog)

module.exports = router