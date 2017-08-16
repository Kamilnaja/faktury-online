angular.module('app', ['ngRoute']).controller('fvCtrl', function ($scope) {
  $scope.kwota = 0;
  $scope.klient = "";
  $scope.numer = $scope.numer++;
  $scope.calculateBrutto = function () {
    //zwróć brutto
  }
  $scope.kwotaBrutto = $scope.kwota + ($scope.kwota * 23 / 100);

  $scope.saveDB = function () {
    //save kwota, nr kolejny i klient do db
  };
})
//po kliknięciu zapisz - zapisz fv w db