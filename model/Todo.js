const mongoose =  require('mongoose');

// schema todolist
const TodoSchema = new mongoose.Schema({
    text:{type: String, required: true},
    done:{type: mongoose.SchemaTypes.Boolean, required: true},
    user: {type: mongoose.SchemaTypes.ObjectId}
})

module.exports = mongoose.model('Todo', TodoSchema)