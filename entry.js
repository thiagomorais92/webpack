
 document.addEventListener("DOMContentLoaded", function(event) {
    
	var myApp  = require("./module.js");
	require("./app/config/ResourceService.js");

	var loginState = require("./app/pages/loginPage/loginRoute.js");
	

	myApp.config(function($stateProvider) {

	  
	$stateProvider.state(loginState);
	
	});
});