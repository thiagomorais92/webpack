//var myApp  = require("../../../module.js");
var myApp = angular.module('myApp');

myApp.factory('ResourceService',['Restangular',function(Restangular){

	var accounts = Restangular.all("accounts");

	var resources = {
		 "accounts" : accounts
	}


	return resources;
}]);