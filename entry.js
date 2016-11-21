
 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    require("./style.css");

	var myApp  = require("./module.js");

	myApp.config(function($stateProvider) {
	  var helloState = {
	    name: 'hello',
	    url: '/hello',
	    template: '<h3>hello world!</h3>'
	  }

	  var aboutState = {
	    name: 'about',
	    url: '/about',
	    template: '<h3>Its the UI-Router hello world app!</h3>'
	  }

	  $stateProvider.state(helloState);
	  $stateProvider.state(aboutState);
	});
});