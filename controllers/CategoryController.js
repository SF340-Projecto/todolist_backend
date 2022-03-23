const User = require("../model/user");
const Categories = require("../model/Categories");
const mongoose = require("mongoose");

const AddCategory = async (req, res) => {
  const user = await User.findOne({ _id: req.body._id });
  const category = await Categories.find({ user_id: user._id });
  if (user) {
    var isExists = false;
    for (let i = 0; i < category.length; i++) {
      if (category[i].name === req.body.name) {
        isExists = true;
      }
    }

    if (isExists) {
      res
        .status(400)
        .send({ success: false, message: "Categories is aleready exists!!" });
    } else {
      const category = await Categories.create({
        user_id: new mongoose.Types.ObjectId(user._id),
        name: req.body.name,
      });
      res.send(category);
      res.send();
    }
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
  const getAllCategory = await Categories.find({user_id: req.params.id})
  res.send(getAllCategory)
}

// const addTask = async (req, res) => {
//   const user = await User.findOne({ _id: req.params.id })
//     .where("Categories.name")
//     .equals(req.params.name);

//   if (user) {
//     var index = 0;
//     console.log(user.categories.length);
//     for (let i = 0; i < user.categories.length; i++) {
//       if (user.categories[i].name === req.params.name) {
//         index = i;
//       }
//     }
//     console.log(index);

//     await user.categories[index].details.push(req.body);
//     user.save();
//     res.send(user);
//   } else {
//     return res.send({ success: false, message: "Category Invalid!!" });
//   }
// };
module.exports = { AddCategory, update, deleteCategory, getAllCategory };
