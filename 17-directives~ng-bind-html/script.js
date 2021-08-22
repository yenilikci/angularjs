var app = angular.module("myApp", ['ngSanitize']);
app.controller("myControl", function ($scope) {
    $scope.test = "<h1>AngularJS</h1>";
});