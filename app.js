const express = require("express");
require("dotenv").config();
const app = express();
const sequelize = require("./db_connection/db");
const connect = require("./db_connection/connection");
const postRouter = require("./router/postRouter");
const PORT = process.env.PORT || 3000;

app.use(express.json());

//routers
app.use("/api", postRouter);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    connect();
  });
});

//sync is not suggested in production
