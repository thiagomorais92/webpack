angular.module("myApp").factory('loginService',['ResourceService',function(ResourceService){


	var buscaLoginPorId = function(id){
		return ResourceService.login.one(id).getList();
	}

	var xablaw = "dhuashduadh";

	return {
		buscaLoginPorId : buscaLoginPorId

	};
}]);