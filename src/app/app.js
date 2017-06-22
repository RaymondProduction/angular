(function() {

  'use strict';

  /**
   * angular
   * Description: Angular!
   */
  angular

  /**
   * app
   * Description: Устанавливаем первоначальное состояние приложения
   */
    .module('app', [])

  /**
   * AppController
   * Description: Sets up a controller
   */
  .controller('AppController', ['$scope', function($scope) {
    $scope.username = 'Nick';

    $scope.usersObject = [{
      firstname: 'BB',
      lastname: 'King'
    }, {
      firstname: 'Ray',
      lastname: 'Charles'
    }, {
      firstname: 'Muddy',
      lastname: 'Waters'
    }, {
      firstname: 'Lightnin',
      lastname: 'Hopkins'
    }, {
      firstname: 'Howlin',
      lastname: 'Wolf'
    }];
  }]);

})();
