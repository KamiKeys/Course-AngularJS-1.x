(function(){

var app = angular.module('universidadApp',[ ]);

// Los corchetes sirven para mandar parámetros adicionales
app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Javier Miguel", "Melissa Smith", "David Miguel", "María Pérez"];

		$scope.listadoProfesores = {
			profesores: [{
				nombre: "Fernando Herrera",
				edad: 29,
				clase: "PEE"
			},
			{
				nombre: "Melissa Flores",
				edad: 24,
				clase: "ICE"
			},
			{nombre: "Juan Carlos",
				edad: 42,
				clase: "M110"}]
		}

}]);





})();
