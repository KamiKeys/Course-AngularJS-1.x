// El fichero app es donde se guardan las directivas de angular para nuestra aplicación. Como el fichero maestro.

// Se le agrega un módulo con el nombre de nuestra app y unos argumentos que serían dependencias que la app puede necesitar.
var app = angular.module('universidadApp', []);

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}

// CONTROLADORES
// Son los que se encargan de controlar las funcionalidades de la página. Es mejor que estén bien encapsulados.

// Se le pone el nombre al propio controlador y se crea una función donde podemos usar código.
// $scope es una variable global que está fuera del controlador. Vive en el ámbito de Angular
app.controller('profesorCtrl', function ($scope) {
	
	// Se crea una propiedad llamada profesor que tendrá los valores de profesorData.
	// Al darle la variable a scope y no a this. hacemos que los cambios no sean automáticos y que podamos controlarlos.
	$scope.profesor = profesorData;
	$scope.editando = {};

	$scope.mostrarCaja = false;

	$scope.EditarProfesor = function(){
		$scope.mostrarCaja = true;
		angular.copy($scope.profesor, $scope.editando)
	}

	$scope.GuardarCambios = function(){
		$scope.mostrarCaja = false;
		angular.copy($scope.editando, $scope.profesor)
	}

	$scope.CancelarCambios = function(){
		$scope.mostrarCaja = false;
		$scope.editando = {};
	}

});