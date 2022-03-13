const Todo = require('../model/Todo');
const User = require('../model/user')
const { default: mongoose } = require('mongoose');


const createTask = async (req, res) => {

    const {text, _id} = req.body
    const users = await User.findOne({_id});

    const todo =  await Todo.create({
        text,
        done: false,
        user: new mongoose.Types.ObjectId(users._id)
    }) 
    
    res.json(todo);
    
}


module.exports = {createTask};