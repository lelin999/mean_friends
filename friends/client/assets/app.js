var appModule = angular.module('app', ['ngRoute']);

appModule.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "partials/all.html"
		})
		.when('/delete/:id', {
			templateUrl: "partials/delete.html",
			controller: "DeleteController"
		})
		.when('/new', {
			templateUrl: "partials/new.html",
			controller: "NewController"
		})
		.when('/edit/:id', {
			templateUrl: "partials/edit.html",
			controller: "EditController"
		})
		.when('/show/:id', {
			templateUrl: "partials/show.html",
			controller: "ShowController"
		})
		.otherwise({
			redirectTo: ('/')
		})
});