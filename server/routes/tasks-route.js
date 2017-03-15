
// tasks.js
var router = require('express').Router();
var Task = require('../models/task-model'); //((require the path))

// ~.:<---------NEW MONGOOSE CODE | CREATES THE MODEL FOR QUERIES--------->:.~
// var mongoose = require('mongoose'); //require mongoose
// var Schema = mongoose.Schema; //set mongoose.Schema to the var Schema
// mongoose.connect('mongodb://localhost/todo');
// mongoose.model(
//   'Task', //name of the mongoose model
//   new Schema({ //the constructor function
//     "name": String,
//     "status": {type: Boolean, default: false }
//   },
//   {
//     collection: 'tasks' //collection in the database
//   }
// ));
//
// var Task = mongoose.model('Task') //var task matches get request. 'task' matches task from line 10

// ~.:<--------- OLD PG CODE --------->:.~
// var pg = require('pg');
// var config = {
//   database: 'phi-tasks',
//   host: 'localhost',
//   port: 5432,
//   max: 10,
//   idleTimeoutMillis: 30000
// };
//
// var pool = new pg.Pool(config);

// ~.:<--------- GET ALL TASKS W/ MONGOOSE --------->:.~
router.get('/', function(req, res) {
  console.log('hit my get all tasks route');
  Task.find({}, function(err, data){ //this is our GET request Task matches var Task from line 20 data can be result/taco
    if(err){
      console.log('There was an error with the query: ', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });  //the function tells mongoose what to do with the information it's 'gotten'
});

// ~.:<--------- ADD NEW TASKS W/ MONGOOSE --------->:.~
router.post('/', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);
  var taskObject = req.body;
  var addedTask = new Task({
    name: taskObject.taskName
  });
  // db query
  addedTask.save(function(err, result){
    if(err){
      console.log('There was an error adding new tasks: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
});

// ~.:<--------- DELETE TASKS W/ MONGOOSE --------->:.~
router.delete('/:id', function(req, res) {
  var taskToDeleteId = req.params.id;
  console.log('hit delete route');
  console.log('here is the id to delete ->', taskToDeleteId);

  // db query
  Task.findByIdAndRemove(
    {_id: req.params.id},
    function(err, result){  //the callback.
      if (err) {
        console.log('Error completeing task: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }
  );
});
//
// ~.:<--------- COMPLETE TASKS W/ MONGOOSE --------->:.~
router.put('/complete/:id', function(req, res) {
  var taskToCompleteId = req.params.id;
  console.log('hit complete route');
  console.log('here is the id to complete ->', taskToCompleteId);

  // db query
  Task.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {status: true}
    },
    function(err, result){  //the callback.
      if (err) {
        console.log('Error completeing task: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }
  );
});
//
// ~.:<--------- UNCOMPLETE TASKS W/ MONGOOSE --------->:.~
router.put('/uncomplete/:id', function(req, res) {
  var taskToUncompleteId = req.params.id;
  console.log('hit complete route');
  console.log('here is the id to complete ->', taskToUncompleteId);

  // db query
  Task.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {status: false}
    },
    function(err, result){  //the callback.
      if (err) {
        console.log('Error completeing task: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }
  );
});

module.exports = router;
