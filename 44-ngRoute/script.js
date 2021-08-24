var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "index.html",
    })
    .when("/blue", {
      templateUrl: "blue.html",
    })
    .when("/red", {
      templateUrl: "red.html",
    })
    .when("/green", {
      templateUrl: "green.html",
    });
});
