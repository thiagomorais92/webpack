var myApp  = require("./module.js");


myApp.factory('ResourceService',['Restangular',function(Restangular){


	var resources = {
		 "accounts" : Restangular.all('accounts');
	};


	return resources;
}]);