(function () {

	angular.module('abComponentes', ['abValoracion', 'abMenu','apsCanvas','toolbarLeft'])
	
		.component('abFilaMovimiento', {
			templateUrl: './componentes/tpl-fila-movimiento.html',
			bindings: {
				movimiento: '='
			}
		})
		.component('abContador', {
			templateUrl: './componentes/tpl-contador.html',
			bindings: {
				texto: '@',
				valor: '='
			}
		})
		.directive('abFilaMovimiento2', function () {
			return {
				restrict: 'A',
				templateUrl: './componentes/tpl-fila-movimiento2.html',
				scope: {
					movimiento: '='
				}
			}
		})
}());
