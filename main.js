angular.module('app', ['ngRoute']).controller('fvCtrl', function ($scope, $http) {

  $scope.saveFV = function () {
    //save amount, nr kolejny i client do db
    if ($scope.client && $scope.amount) {
      $http.post('/api/fvs', {
        client: $scope.client,
        amount: $scope.amount,
        vat: $scope.vat,
        fvNumber: $scope.fvNumber
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
        name: $scope.name
      })
        .then(function (client) {
          //error
          $scope.clients.data.unshift(client);
          console.log(client);
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
});
