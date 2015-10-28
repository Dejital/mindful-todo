// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl',
      cache: false
    });
    $stateProvider.state('add', {
      url: '/add',
      templateUrl: 'add.html',
      controller: 'AddNewTaskCtrl',
      cache: false
    });

    $urlRouterProvider.otherwise('/')
  })

  .factory('Tasks', function() {
    return {
      all: function() {
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          return angular.fromJson(taskString);
        }
        return [];
      },
      save: function(tasks) {
        window.localStorage['tasks'] = angular.toJson(tasks);
      },
      newTask: function(taskTitle) {
        return {
          title: taskTitle
        };
      }
    }
  })

  .controller('HomeCtrl', function($scope, Tasks) {
    $scope.tasks = Tasks.all();
  })

  .controller('AddNewTaskCtrl', function($scope, Tasks) {
    var createTask = function(taskTitle) {
      var newTask = Tasks.newTask(taskTitle);
      $scope.tasks.push(newTask);
      Tasks.save($scope.tasks);
    };
    $scope.tasks = Tasks.all();
    $scope.record = { title: "" };
    $scope.newTask = function(task) {
      if(!task.title)
        return;
      createTask(task.title);
      $scope.record = { title: "" };
    };
  });
