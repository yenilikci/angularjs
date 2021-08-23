var app = angular.module("myApp", []);

app.controller("myControl", function ($scope) {
  $scope.name = "melih";
});

app.run(function ($rootScope) {
  $rootScope.name = "zeynep";
});
