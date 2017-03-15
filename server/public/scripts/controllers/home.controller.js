// home.controller.js
myApp.controller('HomeController', ['TaskFactory', function(TaskFactory){
  console.log('Home Controller was loaded');
  var self = this;
  self.someMessage = 'This site is amazing!!';
}]);
