
// app.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var taskRouter = require('./routes/tasks-route');

//middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/tasks', taskRouter);

app.listen(3003, function() {
  console.log('listening on 3003');
});
