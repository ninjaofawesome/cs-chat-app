'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'MyControllers',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
  .otherwise({redirectTo: '/'});
}]);
