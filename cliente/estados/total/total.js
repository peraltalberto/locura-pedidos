(function () {

	angular.module('total', ['ui.router', 'abFiltros', 'abComponentes', 'servicios'])
		.config(function ($stateProvider) {
			$stateProvider
				.state('total', {
					url: '/',
					template: '<ab-total></ab-total>'
				})
		})
		.component('abTotal', {
			templateUrl: './estados/total/total.html',
			controller: function (maestrosService) {
				var vm = this;

maestrosService.ipc.on('asynchronous-reply', function (event, arg) {
		console.log(arg);
})
 maestrosService.ipc.send('asynchronous-message', 'ping')
				/*
				movimientosService.gettingTotal()
					.success(function (result) {
						vm.total = result;
					})
					*/
				// sintáxis síncrona
				vm.urlimg = '';
				vm.addImg = function () {
					fabric.Image.fromURL(vm.urlimg, function (oImg) {
						// scale image down, and flip it, before adding it onto canvas
						oImg.scale(0.5);
						camiseta = oImg;
						camiseta.on('selected', function () {

							maestrosService.canvas.sendToBack(camiseta);
						});
						maestrosService.canvas.add(camiseta);
				
					});
			}
			}
			});

} ());
