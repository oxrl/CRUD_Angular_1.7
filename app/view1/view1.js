'use strict';

angular.module('myCRUD.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]).controller('View1Ctrl', ['$scope','$http','$q', function($scope,$http,$q) {

   getInfo();

   function getInfo(){

      // $scope.clientes = [{"id": "1", "nombres": "Omar Xavier", "apellidos": "Romero López", "edad": 34},{"id": "2", "nombres": "Jorge Ronald", "apellidos": "López Rigas", "edad": 55}];
       $http.get('http://localhost:3800/api/infoestudiantes/'+ 1 )
           .then(function( data ){
               $scope.estudiantes =  data['data'][0].clientes[0].infoPersonas;

           });
   }

   $scope.insertar =  function(){

       $http.post('http://localhost:3800/api/infoestudiantes', $scope.estudiante).then(function( d ){
                getInfo();
           });
   }



}]);