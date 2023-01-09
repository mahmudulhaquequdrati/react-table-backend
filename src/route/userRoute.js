const express = require("express");
const {
  getAllTheData,
  addNewUser,
  addOrUpdateNewData,
} = require("../controllers/userController");

const router = express.Router();
router.get("/all", getAllTheData);
router.post("/add", addNewUser);
router.put("/update", addOrUpdateNewData);

module.exports = router;
