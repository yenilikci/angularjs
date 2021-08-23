var app = angular.module("myApp", []);

app.controller("myControl", function ($scope, $location) {
  $scope.url = $location.absUrl();
  $scope.url = $location.protocol();
  $scope.url = $location.host();
  $scope.url = $location.port();
  $scope.url = $location.url("deneme");
  $scope.url = $location.path("deneme");
});
