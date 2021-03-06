app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$scope.setActive("mAlumnos");
	 var codigo = $routeParams.codigo;
	$scope.alumno = {};
	$scope.actualizado = false;

	$scope.creando = false;

	if (codigo == "nuevo") {
		$scope.creando = true;
	}else{
		$http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).then(function(data){

		// Si el código que se le pasa por parámetro no existe, se vuelve al listado de alumnos
		if (data.data.err !== undefined) {
			window.location = "#!/alumnos";
			return;
		}

		$scope.alumno = data.data;

	});
	}

	$scope.guardarAlumno = function(){

		if ($scope.creando) {

			$http.post('php/servicios/alumnos.crear.php', $scope.alumno).then(function(data){

				if (data.data.err === false) {
					$scope.actualizado = true;

					setTimeout(function() {
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);
				};
			});

		}else{

				$http.post('php/servicios/alumnos.guardar.php', $scope.alumno).then(function(data){

				if (data.data.err === false) {
					$scope.actualizado = true;

					setTimeout(function() {
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);
				};
			});

		}

	}

}]);