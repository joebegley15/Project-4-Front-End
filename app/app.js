'use strict';

(function musicAppIIFE(){

  var app = angular.module('musicApp', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'songsController',
        controllerAs: 'songsCtrl',
        templateUrl: 'app/views/songs.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

})();
