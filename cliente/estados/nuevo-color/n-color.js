(function () {

	angular.module('n-color', ['ui.router', 'servicios','mdColorPicker'])
		.config(function ($stateProvider) {
			$stateProvider
				.state('ncolor', {
					url: '/ncolor',
					template: '<tmp-nuevo-color></tmp-nuevo-color>'
				})
		})
		.component('tmpNuevoColor', {
			templateUrl: './estados/nuevo-color/n-color.html',
			controller: function (maestrosService,$scope) {
				var vm = this;
				vm.colores=[];
				vm.color = {};
				maestrosService.ipc.send('maestros',{ _id: 'colors' },"getTallas");
				maestrosService.ipc.on("getTallas",function(event, arg){
					
					vm.colores = arg[0].data;
					//console.log(vm.tallas);
					$scope.$apply();
					
				});


			vm.save = function(){
				vm.colores.push(vm.color);
				vm.color = {};
			}

			}
		})

}());
