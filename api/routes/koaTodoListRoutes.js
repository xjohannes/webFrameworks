'use strict';
const _ = require('koa-route');
const todoList = require('../controllers/koaTodoListController');

console.log('THIS IS THE ROUTER');

const koaRouter = (app) => {

  app.use(_.get('/tasks', async (ctx) => {
    await todoList.list_all_tasks(ctx);
  }));

  app.use(_.post('/tasks', async (ctx) => {
    await todoList.create_a_task(ctx);
  }));
  app.use(_.get('/tasks/:taskId', async (ctx, id) => {
    await todoList.read_a_task(ctx, id);
  }))
  app.use(_.put('/tasks/:taskId', async (ctx, id) => {
    await todoList.update_a_task(ctx, id)
  }))
  app.use(_.delete('/tasks/:taskId', async (ctx, id) => {
    await todoList.delete_a_task(ctx, id)
  }))


}
  // todoList Routes


module.exports = koaRouter;