let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true}
});

let Todo = mongoose.model('Todos', todoSchema);

module.exports = Todo;
