var app = angular.module("myApp", []);

app.controller("myControl", function ($scope) {
    $scope.kisiler = [
        {"ad": "ad1", "soyad": "soyad1", "sehir": "sehir1"},
        {"ad": "ad2", "soyad": "soyad2", "sehir": "sehir2"},
        {"ad": "ad3", "soyad": "soyad3", "sehir": "sehir3"}];
});
