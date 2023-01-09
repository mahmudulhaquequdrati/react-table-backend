const UserInfo = require("../models/userInfo");

const getAllTheData = async (req, res) => {
  try {
    const data = await UserInfo.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = new UserInfo({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addOrUpdateNewData = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = new UserInfo({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTheData,
  addNewUser,
  addOrUpdateNewData,
};
