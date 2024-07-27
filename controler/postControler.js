const prisma = require("../db_connection/db.config");

const createPost = async (req, res) => {
  try {
    const { name, email } = req.body;
    const finduser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (finduser) {
      return res.json({ status: 400, message: "email already taken" });
    }
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    return res.status(201).json({
      success: true,
      data: newUser,
      message: "post created successfully",
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};

const getAllPost = async (req, res) => {
  try {
    const { id } = req.params;
    const Users = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!Users) {
      return res.json({
        success: false,
        data: null,
        message: "user not found",
      });
    }
    return res.json({
      success: true,
      data: Users,
      message: "data retrive successfully",
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};
module.exports = { createPost, getAllPost };
