const mongoose = require('mongoose')
const CategoryTasks = require('./Task').schema

const CategoriesSchema = new mongoose.Schema({
    name: String,
    user_id: {type: mongoose.SchemaTypes.ObjectId},
    task_lists: {type: [CategoryTasks], default: []}
    
})
module.exports = mongoose.model("Category", CategoriesSchema);

