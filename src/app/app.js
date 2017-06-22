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

    /**
     * usersArray
     * Description: A generic list of users, possibly pulled from a database, in
     * array notation.
     */
    $scope.usersArray = [
      ['BB', 'King'],
      ['Ray', 'Charles'],
      ['Muddy', 'Waters'],
      ['Lightnin', 'Hopkins'],
      ['Howlin', 'Wolf']
    ];
  }]);

})();
