var app = angular.module('noviaapp',[ ]);
app.controller('profesorCtrl', function () {

	this.mynovia = noviaData;
	
});

var noviaData = {
	nombre: "Maria alejandra",
	bio: "estudiante",
	edad:  17,
	foto: "img/novia.jpg",
	tamano: 200
}