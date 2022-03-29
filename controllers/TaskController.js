const Categories = require("../model/Categories");
const mongoose = require("mongoose");

const addTask = async (req, res) => {
  //Find category that belong to user and category name
  const category = await Categories.findOne({
    user_id: req.body.user_id,
    _id: req.body.categorie_id,
  });

  if (category) {
    //Add task to category
    await category.task_lists.push(req.body);
    category.save();
    res.send(category);
  } else {
    res.status(400).send({
      success: false,
      message: "User Id or category name is invalid!!",
    });
  }
};

const getAllTask = async (req, res) => {
  //Find category that belong to user and category name
  const category = await Categories.findOne({
    user_id: req.params.id,
    _id: req.params._id,
  });

  //Send all task in category
  if (category) {
    res.send(category.task_lists);
  } else {
    res.status(400).send({
      success: false,
      message: "User Id or category name is invalid!!",
    });
  }
};

const updateTask = async (req, res) => {
  const category = await Categories.findOne({ "task_lists._id": req.body._id });
  if (category) {
    var index = 0;
    for (let i = 0; i < category.task_lists.length; i++) {
      if (category.task_lists[i]._id.equals(req.body._id)) {
        index = i;
      }
    }
    await Object.assign(category.task_lists[index], req.body);
    category.save();
    res.send(category);
  } else {
    res.status(400).send({
      success: false,
      message: "Data is invalid!!",
    });
  }
};

const deleteTask = async (req, res) => {
  const category = await Categories.findOne({
    "task_lists._id": req.params.id,
  });
  if (category) {
    await category.task_lists.id(req.params.id).remove();
    res.send(category);
  } else {
    res.status(400).send({
      success: false,
      message: "Data is invalid!!",
    });
  }
};

module.exports = { addTask, getAllTask, updateTask, deleteTask };
