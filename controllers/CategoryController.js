const User = require("../model/user");
// const Category = require("../model/Categories");

const AddCategory = async (req, res) => {
  const user = await User.findOne({_id: req.params.id});
  user.Categories.push(req.body);
  user.save();
  res.send(user);
};

const addTask = async (req, res) => {
  const user = await User.findOne({_id: req.params.id}, {Categories: {name: req.params.name}});
  user.Categories[0].details.push(req.body)
  user.save()
  res.send(user)
}
module.exports = { AddCategory, addTask };
