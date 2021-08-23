var app = angular.module("myApp", []);

app.controller("myControl", function ($scope) {

});

app.directive("test", function () {
    return {
        template: "<h1>AngularJS</h1>",
        //restrict: "C", //class için
    };
});