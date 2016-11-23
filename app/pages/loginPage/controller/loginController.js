
require("../../../config/ResourceService.js");
require("../service/loginService.js");

module.exports = angular.module("myApp").controller('loginController',['ResourceService','loginService','$scope',function(ResourceService,loginService,$scope){
	
	loginService.buscaLoginPorId("teste").then(function(resultado){
		resultado;
	});
}]);