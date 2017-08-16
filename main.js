angular.module('app', ['ngRoute']).controller('fvCtrl', function ($scope, $http) {
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
  $scope.addPost = function () {
    if ($scope.klient && $scope.kwota) {
        $scope.fvs .unshift({
        
        })
    }
  }
  $http.get('http://locahost:3000/api/fvs')
  .success(function(fvs){
    $scope.fvs = fvs
  })
})
//po kliknięciu zapisz - zapisz fv w db