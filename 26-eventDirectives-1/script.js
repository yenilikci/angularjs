var app = angular.module("myApp", []);
app.controller("myControl", function ($scope) {
    $scope.firstFunction = function () {
        $scope.bColor = "green";
        $scope.tColor = "white";
    };

    $scope.secondFunction = function () {
        $scope.bColor = "black";
        $scope.tColor = "red";
    };
});