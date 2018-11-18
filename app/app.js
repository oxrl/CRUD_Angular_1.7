'use strict';

// Declare app level module which depends on views, and core components
angular.module('myCRUD', [
  'ngRoute',
  'myCRUD.view1',
  'myCRUD.view2',
  'myCRUD.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view2'});
}]);
