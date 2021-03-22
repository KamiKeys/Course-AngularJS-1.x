(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  $scope.geo ={};
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
  // Get es para archivos internos o locales, para conseguir información de una web usamos jsonp
  $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function(data){
  	$scope.geo = data.data;
  });


}]);





})();
