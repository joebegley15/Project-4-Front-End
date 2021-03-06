(function indexFactoryIIFE(){

  // Creates a songs factory
  var indexFactory = function($http){
    var factory = {};
    factory.song = {};
    factory.songs = [];
    factory.album = {};
    factory.albums = [];

    factory.getSongs = function(){
      // allow access to the list of songs
      return  $http.get('https://frozen-wave-7557.herokuapp.com/songs').success(function(response){
        angular.copy(response, factory.songs);
      });
    };

    factory.getSong = function(songId){
      return  $http.get('https://frozen-wave-7557.herokuapp.com/songs/' + songId).success(function(response){
        angular.copy(response, factory.song)});
    };
    return factory;
  };

  factory.getAlbums = function(){
      // allow access to the list of albums
      return  $http.get('https://frozen-wave-7557.herokuapp.com/albums').success(function(response){
        angular.copy(response, factory.albums);
      });
    };

    factory.getAlbum = function(albumId){
      return  $http.get('https://frozen-wave-7557.herokuapp.com/albums/' + albumId).success(function(response){
        angular.copy(response, factory.album)});
    };
    return factory;
  };

  songsFactory.$inject = ['$http'];

  angular.module('musicApp').factory('songsFactory', songsFactory);
  angular.module('musicApp').factory('albumsFactory', albumsFactory);
})();
