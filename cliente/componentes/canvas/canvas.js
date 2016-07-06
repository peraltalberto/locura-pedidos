(function () {
	angular.module('apsCanvas', ['ui.router'])
		.controller('CanvasCtrl', canvasCtrl)
		.component('apsCanvas', {
			templateUrl: './componentes/canvas/canvas.html',
			controller: 'CanvasCtrl'
		})

	function canvasCtrl(maestrosService) {
		
         maestrosService.canvas = new fabric.Canvas('canvas', {
  			'backgroundImage': 'http://ericasadun.com/wp-content/uploads/2013/04/f.png',
          });
		

	}
}());