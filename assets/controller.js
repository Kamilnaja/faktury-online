angular.module('app', []).controller('fvCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.vat = 23;
  $scope.amount = 0;
  $scope.countBrutto = function () {
    $scope.amountBrutto = $scope.amount + ($scope.amount * $scope.vat / 1000 );
  };
  
    $scope.setClient = function () {
    $scope.nip = $scope.client.selected.nip;
    $scope.name = $scope.client.selected.name;
  };

  $scope.saveFV = function () {
    //save amount, nr kolejny i client do db
    if ($scope.client && $scope.amount) {
      $http.post('/api/fvs', {
        client: $scope.name,
        amount: $scope.amount,
        vat: $scope.vat,
        fvNumber: $scope.fvNumber,
        fvNip: $scope.nip,
        fvDate: $scope.fvDate
      })
        .then(function (fv) {
          //error
          $scope.fvs.data.unshift(fv);
        })
    }
  };

  $scope.saveClient = function () {
    //save amount, nr kolejny i client do db
    if ($scope.name && $scope.nip) {
      $http.post('/api/clients', {
        nip: $scope.nip,
        name: $scope.name,
        addressStreet: $scope.addressStreet,
        addressNr: $scope.addressNr,
        addressCity: $scope.addressCity,
        addressPostal: $scope.addressPostal
      })
        .then(function (client) {
          //error
          $scope.clients.data.unshift(client);
          console.log("dodano klienta " + client);
        })
    } else {
      console.log("wpisz dane");
    }
  };


  $http.get('http://localhost:3000/api/clients')
    .then(function (clients) {
      $scope.clients = clients
    });

  $http.get('http://localhost:3000/api/fvs')
    .then(function (fvs) {
      $scope.fvs = fvs
    })
  $scope.sortType = 'name';
}]);