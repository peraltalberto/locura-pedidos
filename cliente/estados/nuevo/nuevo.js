(function () {

	angular.module('nuevo', ['ui.router', 'servicios','mdColorPicker'])
		.config(function ($stateProvider) {
			$stateProvider
				.state('nuevo', {
					url: '/nuevo',
					template: '<tmp-nuevo-producto></tmp-nuevo-producto>'
				})
		})
		.component('tmpNuevoProducto', {
			templateUrl: './estados/nuevo/nuevo.html',
			controller: function (maestrosService,$scope) {
				var vm = this;
				vm.tallas=[];
				vm.product = {};
				vm.product.tallas = [];
				maestrosService.ipc.send('maestros',{ _id: 'tallas' },"getTallas");
				maestrosService.ipc.on("getTallas",function(event, arg){
					
					vm.tallas = arg[0].data;
					//console.log(vm.tallas);
					$scope.$apply();
					
				});
		vm.isTalla = function(talla){
			if (vm.product.tallas.indexOf(talla) > -1) {
    						
							return false;
				}
				return true;
		}	
			vm.toolgerTallas = function(talla){
		//console.log(talla);
			var i = vm.product.tallas.indexOf(talla)
				if (i > -1) {
    						vm.product.tallas.splice(i, 1);
				}else{
					vm.product.tallas.push(talla);
				}
			}	

			vm.save = function(){
				console.log(vm.product.color);
			}

			}
		})

}());
