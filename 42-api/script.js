var app = angular.module("myApp", []);

app.controller("myControl", function ($scope) {
  $scope.number = 5;
  $scope.isnumber = angular.isNumber($scope.number);

  $scope.string = "Angular JS";
  $scope.isstring = angular.isString($scope.string);

  $scope.date = new Date();
  $scope.isdate = angular.isDate($scope.date);

  $scope.array = [];
  $scope.isarray = angular.isArray($scope.array);

  $scope.object = {};
  $scope.isobject = angular.isObject($scope.object);

  $scope.defined = "5";
  $scope.isdefined = angular.isDefined($scope.defined);

  $scope.undefined;
  $scope.isundefined = angular.isUndefined($scope.undefined);

  $scope.function = function () {};
  $scope.isfunction = angular.isFunction($scope.function);
});
