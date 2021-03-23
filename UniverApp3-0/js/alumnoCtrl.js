app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$scope.setActive("mAlumnos");
	 var codigo = $routeParams.codigo;
	$scope.alumno = {};

	$http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).then(function(data){

		// Si el código que se le pasa por parámetro no existe, se vuelve al listado de alumnos
		if (data.data.err !== undefined) {
			window.location = "#!/alumnos";
			return;
		}

		$scope.alumno = data.data;

	});

}]);