(function () {
	angular.module('abMenu', ['ui.router'])
		.controller('MenuCtrl', menuCtrl)
		.component('abMenuNavegacion', {
			templateUrl: './componentes/menu/tpl-menu-navegacion.html',
			controller: 'MenuCtrl'
		})

	function menuCtrl($state, $mdSidenav,maestrosService) {
		this.soyElEstadoActivo = function (estado) {
			return $state.is(estado);
		}
		this.close = function(){
			console.log('cerrando');
			maestrosService.ipc.send('closeWin');
		}
this.reload = function(){
			console.log('cerrando');
			maestrosService.ipc.send('reload');
		}
this.dev = function(){
			console.log('dev');
			maestrosService.ipc.send('dev');
		}

		 
		  this.openMenu = function(){
			  $mdSidenav('right')
          .toggle()
          .then(function () {
           
          });
		  }
	}
}());
