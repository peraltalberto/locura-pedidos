(function () {
	angular.module('toolbarLeft', ['ui.router'])
		.controller('toolbarLerfCtrl', toolbarLerfCtrl)
		.component('toolbarLeft', {
			templateUrl: './componentes/toolbar-left/tpl-toolbar-left.html',
			controller: 'toolbarLerfCtrl'
		})

	function toolbarLerfCtrl(maestrosService) {
		var vm = this;
         
		

	}
}());