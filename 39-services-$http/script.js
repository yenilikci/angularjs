var app = angular.module("myApp", []);

app.controller("myControl", function ($scope, $http) {
  /*
    $http.get("test.txt").then(function (response) {
      $scope.deneme = response.data;
      $scope.statusCode = response.status;
      $scope.statusText = response.statusText;
    });
  */
  $http({
    method: "GET",
    url: "test.txt",
  }).then(
    function basarili(response) {
      $scope.deneme = response.data;
      $scope.statusCode = response.status;
      $scope.statusText = response.statusText;
    },
    function error(response) {
      $scope.deneme = "Dosya bulunamadı!";
      $scope.statusCode = response.status;
      $scope.statusText = response.statusText;
    }
  );
});
