require("../service/loginService.js");

module.exports = angular.module("myApp").controller('loginController',['ResourceService','loginService','$scope','toaster',function(ResourceService,loginService,$scope,toaster){
	

	toaster.pop('success', "title", "text");
	
	loginService.buscaLoginPorId("teste").then(function(resultado){
		resultado;

	},function(err){
		console.log("erro__"+err);
		
		//
	});
}]);