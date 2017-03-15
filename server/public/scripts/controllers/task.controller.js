// task.controller.js
myApp.controller('TaskController', ['TaskFactory', function(TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = TaskFactory.allTasks;

  self.addTask = function() {
    TaskFactory.addTask(self.newTask);
  }

  self.deleteTask = function(taskId) {
    TaskFactory.deleteTask(taskId);
  }

  self.completeTask = function(taskId) {
    TaskFactory.completeTask(taskId);
  }

  self.uncompleteTask = function(taskId) {
    TaskFactory.uncompleteTask(taskId);
  }

}]);
