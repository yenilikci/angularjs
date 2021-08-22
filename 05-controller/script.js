var app = angular.module("myApp", []);

app.controller("myControl", function ($scope) {
    $scope.name = "MELİH";
    $scope.surname = "ÇELİK";
});

app.controller("secondControl", function ($scope) {
    $scope.age = 22;
});