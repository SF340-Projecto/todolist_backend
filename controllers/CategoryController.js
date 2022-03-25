const User = require("../model/user");
const Categories = require("../model/Categories");
const mongoose = require("mongoose");

const AddCategory = async (req, res) => {
  const user = await User.findOne({ _id: req.body._id });
  if (user) {
    const category = await Categories.create({
      user_id: new mongoose.Types.ObjectId(user._id),
      name: req.body.name,
    });
    res.send(category);
  } else {
    res.status(400).send({ success: false, message: "User id is invalid!!" });
  }
};

const update = async (req, res) => {
  const updateCategory = await Categories.updateOne(
    { _id: req.body._id },
    {
      $set: {
        name: req.body.name,
      },
    }
  );

  res.send(updateCategory);
};

const deleteCategory = async (req, res) => {
  const deleteCategory = await Categories.deleteOne({
    _id: req.params.id,
  }).catch(() => res.status(400).send("Invalid Id!!"));
  res.send(deleteCategory);
};

const getAllCategory = async (req, res) => {
  const getAllCategory = await Categories.find({ user_id: req.params.id });
  res.send(getAllCategory);
};

module.exports = { AddCategory, update, deleteCategory, getAllCategory };
