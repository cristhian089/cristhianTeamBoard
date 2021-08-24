const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();
const Role = require("./routes/role");
const User = require("./routes/user");
const Board = require("./routes/board");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", Role);
app.use("/api/user", User);
app.use("/api/board", Board);
app.use("/uploads",express.static("uploads"));


app.listen(process.env.PORT,()=>console.log("Backend server running on port: ", process.env.PORT));

dbConnection();