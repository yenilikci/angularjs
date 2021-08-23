var app = angular.module("myApp", []);

app.controller("myControl", function ($scope, $timeout) {
  $scope.test = "merhaba";
  $timeout(function () {
    $scope.test = "hoşgeldiniz";
  }, 2000);
});
