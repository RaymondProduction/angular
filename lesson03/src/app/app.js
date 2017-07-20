angular.module('scopeExample', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.username = 'Unknown';

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };
}]);
