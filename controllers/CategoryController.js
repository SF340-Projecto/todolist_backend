const User = require("../model/user");
const Category = require("../model/Categories");

const AddCategory = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (user) {
    user.Categories.push(req.body);
    user.save();

    res.status(201).send(user.Categories);
  } else {
    res.status(400).send({ success: false, message: "User id is invalid!!" });
  }
};


const addTask = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
    .where("Categories.name")
    .equals(req.params.name);

  if (user) {
    var index = 0;
    console.log(user.Categories.length);
    for (let i = 0; i < user.Categories.length; i++) {
      if (user.Categories[i].name === req.params.name) {
        index = i;
      }
    }
    console.log(index);
    
    await user.Categories[index].details.push(req.body);
    user.save()
    res.send(user);
  } else {
    return res.send({ success: false, message: "Category Invalid!!" });
  }
};
module.exports = { AddCategory, addTask };
