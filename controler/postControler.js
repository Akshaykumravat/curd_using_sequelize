const Post = require('../models/post')


const createPost =  async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await Post.create({ title, content });
        res.status(201).json({
          success: true,
          data: newPost,
          message: "post created successfully",
        });
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Failed to create post" });
      }
}


const getAllPost = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json({
          success: true,
          data: posts,
          message: "data retrive successfully",
        });
      } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Failed to fetch posts" });
      }
}
module.exports = {createPost, getAllPost}