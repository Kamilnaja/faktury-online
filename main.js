angular.module('app', ['ngRoute']).controller('fvCtrl', function ($scope, $http) {
  $scope.amount = 0;
  $scope.client = "";
  $scope.number = $scope.number++;
  var fvs = [];
  $scope.calculateBrutto = function () {
    //zwróć brutto
  }
  $scope.amountBrutto = $scope.amount + ($scope.amount * 23 / 100);

  $scope.saveDB = function () {
    //save amount, nr kolejny i client do db
    if ($scope.client && $scope.amount) {
      $http.post('/api/fvs', {
        number: 10,
        client: $scope.client,
        amount: $scope.amount
      })
      .then(function(fv){
        //error
        $scope.fvs.unshift(fv);
      })
  }
  };
  
  $http.get('http://localhost:3000/api/fvs')
  .then(function(fvs){
    $scope.fvs = fvs
    console.log(fvs);
  })
})
//po kliknięciu zapisz - zapisz fv w db