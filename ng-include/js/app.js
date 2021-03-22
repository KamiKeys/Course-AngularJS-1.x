(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  
	$scope.profesores = {};
	$scope.tblProfesores = 'parciales/tbProfesores.html';

  
  	$http.get('json/profesores.json').then(function(data){
  		//Codigo cuando es correcta la petición
  		$scope.profesores = data.data.profesores;

  	});



}]);





})();
