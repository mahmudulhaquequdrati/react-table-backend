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

const addNewWorkHour = async (req, res) => {
  try {
    const data = await UserInfo.find({ _id: req.params.id });
    let OldDatas = data[0].datas;
    if (OldDatas.date === req.body.date) {
      addOrUpdateNewData(req, res);
      return;
    } else {
      console.log(OldDatas);
      const newData = [
        ...OldDatas,
        { date: req.body.date, work: req.body.work },
      ];
      const finalData = {
        name: data[0].name,
        datas: newData,
      };
      const newUser = new UserInfo(finalData);
      await newUser.save();
    }

    res.send(newUser);
  } catch (error) {
    res.status(500).json({ error: "There was a Server Side Error!" });
  }
};

const addOrUpdateNewData = async (req, res) => {
  try {
    const { date, work } = req.body;
    const data = await UserInfo.find({ _id: req.params.id });
    let OldDatas = data[0].datas;
    const oldFilter = OldDatas.filter((data) => data.date !== date);

    const result = await UserInfo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          datas: [
            ...oldFilter,
            {
              date: date,
              work: work,
            },
          ],
        },
      },
      { new: true, useFindAndModify: false }
    );

    res
      .status(200)
      .json({ message: "Todo Was Update successfully!", res: result });
  } catch (error) {
    res.status(500).json({ error: "There was a Server Side Error!" });
  }
};

module.exports = {
  getAllTheData,
  addNewUser,
  addOrUpdateNewData,
  addNewWorkHour,
};
