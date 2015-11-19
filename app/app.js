(function() {
'use strict';

	angular
		.module('eTommy', [])
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$log'];
	function HomeController($log) {
		var vm = this;
		vm.title = "Hello World!";

		activate();

		////////////////

		function activate() { }
	}
})();