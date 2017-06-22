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
     * changeUsername
     * Description: Updates the scope username
     */
    $scope.changeUsername = function(username) {
      $scope.username = username;
    };
  }]);

})();
