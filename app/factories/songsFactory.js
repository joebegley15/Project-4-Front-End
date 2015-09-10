(function songsFactoryIIFE(){

  // Creates a songs factory
  var songsFactory = function($http){
    var factory = {};
    factory.song = {};
    factory.songs = [];

    factory.getSongs = function(){
      debugger;
      // allow access to the list of songs
      return  $http.get('http://localhost:8000/songs').success(function(response){
        angular.copy(response, factory.songs);
      });
    };

    factory.getSong = function(songId){
      return  $http.get('http://localhost:8000/songs/' + songId).success(function(response){
        angular.copy(response, factory.song)});
    };
    return factory;
  };

  songsFactory.$inject = ['$http'];

  angular.module('musicApp').factory('songsFactory', songsFactory);
})();
