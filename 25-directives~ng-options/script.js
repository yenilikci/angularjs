var app = angular.module("myApp", []);
app.controller("myControl", function ($scope) {
    $scope.languages = ["İngilizce", "İspanyolca", "Almanca"];

    $scope.peoples = [{name: 'Melih', language: 'İngilizce'}, {name: 'Zeynep', language: 'Almanca'}];

    $scope.list = {
        nameFirst: 'Melih',
        nameSecond: 'Zeynep'
    };
});