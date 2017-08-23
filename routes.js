const express = require('express');
let BrochureController = require('./controllers/brochure');
let TodoController = require('./controllers/todo');

module.exports = function(app) {
  let brochureRouter = express.Router();
  let todoRouter = express.Router();

  brochureRouter.get('/', BrochureController.home);

  todoRouter.get('/', TodoController.list);
  todoRouter.post('/', TodoController.add);
  // :id is a custom id param to be accessed via req.parmas.id
  todoRouter.get('/:id/delete', TodoController.delete);

  app.use('/', brochureRouter);
  app.use('/todo', todoRouter);
};
