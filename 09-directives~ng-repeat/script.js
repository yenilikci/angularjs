var app = angular.module("myApp", []);
app.controller("myControl", function ($scope) {
    $scope.names = ["HTML", "CSS", "JS", "ANGULARJS"];
    $scope.people = [{name: 'Melih', language: 'Js'}, {name: 'Zeynep', language: 'Py'}];
});