const Categories = require("../model/Categories");
const Todo = require('../model/Todo');

const getAll = async (req, res) => {
    var defaultArchive = await Todo.find({id_user: req.body.user_id, achive: true})
    const category = await Categories.find({user_id: req.body.user_id, 'task_lists.achive': true}, {_id: 0, name: 0, __v: 0, user_id: 0})
    var temp = [];
    category.forEach(element => {
        temp.push(element.task_lists)
    });
    var arr1d = [].concat(...temp)
    var result = arr1d.concat(defaultArchive)
    res.send(result);
}

module.exports = {getAll};