const mongoose = require('mongoose')

const CategoryTasks = new mongoose.Schema({
    topic: String,
    // date:{type: String, required: false},
    // priority:{type: String, required: false},
    // taskDetail:{type: String, required: true},
    // taskDate:{type: String, required: false},
    // textTime:{type: String, required: false},
    // timestamp:{type: String, required: false},
    // topic:{type: String, required: true},
    // urlPhoto:{type: String, required: false},
    
})

module.exports = mongoose.model("CategoryTask", CategoryTasks);