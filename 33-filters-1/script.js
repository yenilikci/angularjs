var app = angular.module("myApp", []);

app.controller("myControl", function ($scope) {
  $scope.value = "Melih";

  $scope.cur = 10.15;

  $scope.jValue = {
    name: "Melih",
    age: 22,
  };

  $scope.number = "15";

  $scope.date = new Date();

  $scope.lmValue = "Çelik";

  $scope.array = ["react", "vue", "angular"];
});
