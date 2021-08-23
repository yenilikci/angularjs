var app = angular.module("myApp", []);
app.controller("myControl", function ($scope) {
    $scope.firstFunction = function () {
        $scope.test = true;
    };

    $scope.secondFunction = function () {
        $scope.test2 = true;
    };

    $scope.thirdFunction = function () {
        $scope.test3 = true;
    }

    $scope.fourthFunction = function () {
        $scope.goruntu = "url(angular.png)";
    };

    $scope.fifthFunction = function () {
        $scope.gg = !$scope.gg;
    };
});