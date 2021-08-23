var app = angular.module("myApp", []);

app.controller("myControl", function ($scope, $window) {
  $scope.sub = function () {
    $window.alert("Gönderildi");
  };
});
