var app = angular.module("myApp", []);

app.controller("myControl", function ($scope) {
  $scope.kisiler = ["ali", "mehmet", "ayşe", "gizem"];
});

app.filter("myFilter", function () {
  return function (x) {
    var i,
      c,
      y = "";
    c = x[0];
    c = c.toUpperCase();
    y += c;
    for (i = 1; i < x.length; i++) {
      c = x[i];
      y += c;
    }
    return y;
  };
});
