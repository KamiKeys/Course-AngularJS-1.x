app.config(function($routeProvider){
	// Cuando la ruta termina en / se redirige a home
	$routeProvider.when('/',{
		templateUrl: 'parciales/home.html',
		controller: 'inicioCtrl'
	})
	.when('/profesores',{
		templateUrl: 'parciales/profesores.html',
		controller: 'profesoresCtrl'
	})
	.when('/alumnos',{
		templateUrl: 'parciales/alumnos.html',
		controller: 'alumnosCtrl'
	})
	.otherwise({ // Si hace cualquier otra cosa los redirige a /
		redirectTo: '/'
	});

});