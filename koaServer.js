const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Task = require('./api/models/koaTodoListModel'); //created model loading here
const bodyParser = require('koa-bodyparser');
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser());

const koaRouter = require('./api/routes/koaTodoListRoutes')
koaRouter(app)

app.listen(port, () => console.log(`todo list RESTful KOA API server started on port: ${port}!`));




// app.use(async (req, res)  => {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

// logger

// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`RESPONSE TIME: ${ctx.method} ${ctx.url} - ${rt}`);
// });
//
// // x-response-time
//
// app.use(async (ctx, next) => {
//   console.log('SET X-RESPONSE TIME');
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });