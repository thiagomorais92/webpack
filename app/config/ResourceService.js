//var myApp  = require("../../../module.js");
var myApp = angular.module('myApp');


myApp.factory('ResourceService',['Restangular',function(Restangular){

	var login = Restangular.all("login");

	var resources = {
		 login : login
	}


	return resources;
}]);