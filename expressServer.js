const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Task = require('./api/models/expressTodoListModel'); //created model loading here
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port, () => console.log(`todo list RESTful EXPRESS API server started on port: ${port}!`));
