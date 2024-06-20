const asyncHandler = require("express-async-handler")
const Blog = require("../models/blogModel")

// read
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({})
  res.status(200).json(blogs)
})

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  const blog = await Blog.findById(id)
  if (!blog) {
    res.status(401)
    throw new Error("Blog doesn't exist")
  }
  res.status(200).json(blog)
})

// create
const createBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body
  if (!title || !content) {
    res.status(400)
    throw new Error("Please provide all fields")
  }
  const newBlog = await Blog.create({ title, content})
  res.status(200).json(newBlog)
})

// update
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  if (!blog) {
    res.status(400)
    throw new Error("Blog doesn't exist")
  }
  if (!req.body.title && !req.body.content) {
    res.status(400)
    throw new Error("Please provide field to update")
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {new: true})
  res.status(200).json(updatedBlog)  
})

// delete
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  const blog = await Blog.findById(id)
  if (!blog) {
    res.status(400)
    throw new Error("Blog doesn't exist")
  }
  const deletedBlog = await Blog.findByIdAndDelete(id)
  res.status(200).json(deletedBlog)
})

module.exports = { getBlogs, getBlog, createBlog, updateBlog, deleteBlog }