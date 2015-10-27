// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html'
  })
  $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'add.html'
  })

  $urlRouterProvider.otherwise('/')
})

.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    { title: 'First task' },
    { title: 'Second task' },
    { title: 'Third task' }
  ];
})

.controller('AddNewTaskCtrl', function($scope) {
  $scope.message = 'Add new task here';
});
