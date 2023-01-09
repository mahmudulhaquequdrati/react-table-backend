const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./src/config/dbConnect");
const PORT = process.env.PORT || 5000;
const app = express();
const userRoutes = require("./src/route/userRoute");

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);

connectDB();

app.use("/api/user", userRoutes);

mongoose.connection.once("open", () => {
  console.log(
    `📗 Connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}`
  );
  app.listen(PORT, () => console.log(`Server running in port no : ${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.log(`📕 Error connecting to MongoDB: ${err}`);
});
