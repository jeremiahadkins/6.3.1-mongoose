let Todo = require('../models/todo');


let TodoController = {
  list: function (req, res) {
    // it takes a callback function?
    Todo.find().then(function (todos) {
      res.render('todo/list', {todos: todos });
    });
  },
  add: function(req, res) {
    // take info from form and add to mongodb
    let title = req.body.title;
    let newTodo = new Todo({title: title});
    newTodo.save(function(){
      // send user to list view
      res.redirect('/todo');
    });
  },
  delete: function(req, res) {
    let todoId = req.params.id;
    Todo.deleteOne({"_id": todoId}).then(function(){
      res.redirect('/todo');
    });
  }
};

module.exports = TodoController;
