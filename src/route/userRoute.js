const express = require("express");
const {
  getAllTheData,
  addNewUser,
  addNewWorkHour,
  addOrUpdateNewData,
} = require("../controllers/userController");

const router = express.Router();
router.get("/all", getAllTheData);
router.post("/add", addNewUser);
router.post("/addhour/:id", addNewWorkHour);
router.put("/update/:id", addOrUpdateNewData);

module.exports = router;
