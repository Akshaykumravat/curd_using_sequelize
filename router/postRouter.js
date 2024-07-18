const router = require("express").Router();
const {createPost, getAllPost} = require('../controler/postControler')

// Route to create a new post
router.route("/posts").post(createPost);


//Route to get all post
router.route("/posts").get(getAllPost)

module.exports = router;
