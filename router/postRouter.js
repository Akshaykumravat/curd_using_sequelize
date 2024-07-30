const router = require("express").Router();
const {
  createUser,
  getAllUser,
  getUserById
} = require("../controler/postControler");

// Route to create a new post
router.route("/user").post(createUser);

//Route to get all post
router.route("/user/:id").get(getUserById);

router.route('/users').get(getAllUser)

module.exports = router;
