const express = require("express");
require("dotenv").config();
const app = express();

const postRouter = require("./router/postRouter");
const PORT = process.env.PORT || 3000;

app.use(express.json());

//routers
app.use("/api", postRouter);


  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });


//sync is not suggested in production
