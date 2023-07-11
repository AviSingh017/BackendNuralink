const cors = require("cors");
const express = require("express");
// const Socket = require("socket.io");
const app = express();
app.use(cors());
const http = require("http");
const { connect } = require("./Connect/db");
const { signin } = require("./Routes/Auth.route");
const { auth } = require("./Middlewares/Auth");
const { task } = require("./Routes/Task.route");
require("dotenv").config();

// const app = express();

app.use(express.json())
app.get("/", async (req, res) => {
  try {
    console.log("HELLO FORM HOME");
    res.send("HOME");
  } catch (error) {
    console.log(error);
  }
});





app.use("/users",signin)
app.use(auth)
app.use("/task",task)



app.listen(process.env.PORT, async () => {
  try {
    await connect;
    console.log("connected to DB");
  } catch (error) {
    console.log(error, "In the index.js listen");
  }
});
