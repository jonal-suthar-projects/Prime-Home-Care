require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
