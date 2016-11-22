var myApp  = require("./module.js");


myApp.factory('ResourceService',['Restangular',function(Restangular){

	var accounts = Restangular.all("accounts");

	var resources = {
		 "accounts" : accounts
	}


	return resources;
}]);