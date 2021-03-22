(function(){

var app = angular.module('ejemplosApp',[ ]);


// Se le pasa el http para que sea una inyección, es necesario declararlo dentro del array
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

	$scope.profesores = {};

	$http.get('json/profesores.json')
	.then(function(data) {
	    // Todo BIEN, la información viene en la respuesta.
	    $scope.profesores = data.data.profesores;
	})
	.catch(function(data) {
	    // Problemas con la peticion
	})
	.finally(function() {
	    // Al terminar el THEN o CATCH
	});

}]);


})();
