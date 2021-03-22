app.config(function($routeProvider){
	// Cuando la ruta termina en / se redirige a home
	$routeProvider.when('/',{
		templateUrl: 'parciales/home.html'
	})
	.when('/profesores',{
		templateUrl: 'parciales/profesores.html'
	})
	.when('/alumnos',{
		templateUrl: 'parciales/alumnos.html'
	})
	.otherwise({ // Si hace cualquier otra cosa los redirige a /
		redirectTo: '/'
	});

});