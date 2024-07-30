const prisma = require("../db_connection/db.config");

const createUser = async (req, res) => {
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

//
const getUserById = async (req, res) => {
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

const getAllUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    if (!users || users.length === 0) {
      return res.status(404).json({
        status: "fail",
        data: null,
        message: "No users found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: users,
      message: "Users retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching users: ", error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred while retrieving users",
    });
  }
};


module.exports = { createUser,getAllUser,getUserById };
