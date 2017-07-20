var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

myApp.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2; };
}]);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.name = 'Unknown';

    $scope.raymond = function() {
        $scope.name = 'Raymond';
    };

    $scope.petro = function() {
        $scope.name = 'Petro';
    };
}]);
