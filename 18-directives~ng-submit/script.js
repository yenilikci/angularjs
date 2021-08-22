var app = angular.module("myApp", []);
app.controller("myControl", function ($scope) {
    $scope.message = "Mesajınız gönderilmedi";

    $scope.changeMessage = function () {
        $scope.message = "Mesajınız gönderildi";
    };
});