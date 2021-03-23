app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = {};

	$http.get('php/servicios/alumnos.listado.php').then(function(data){

		$scope.alumnos = data.data;
	});

}]);