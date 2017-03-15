var mongoose = require('mongoose'); //require mongoose
var Schema = mongoose.Schema; //set mongoose.Schema to the var Schema
mongoose.connect('mongodb://localhost/todo');
mongoose.model(
  'Task', //name of the mongoose model
  new Schema({ //the constructor function
    "name": String,
    "status": {type: Boolean, default: false }
  },
  {
    collection: 'tasks' //collection in the database
  }
));

// var Task = mongoose.model('Task') //var task matches get request. 'task' matches task from line 10
//
// module.exports = Task;


module.exports = mongoose.model('Task'); 
