var app = angular.module("myApp", []);

app.controller("myControl", function ($scope, $interval) {
  $scope.test = new Date().toLocaleTimeString();
  $interval(function () {
    $scope.test = new Date().toLocaleTimeString();
  }, 1000);
});
