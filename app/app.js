(function songsAppIIFE(ang){

  var app = ang.module('songApp', ['ngRoute']);

  app.config(function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'songsController',
        controllerAs: 'songsCtrl',
        templateUrl: 'app/views/songs.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})(angular);
