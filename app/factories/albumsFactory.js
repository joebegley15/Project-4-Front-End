(function albumsFactoryIIFE(){

  // Creates a albums factory
  var albumsFactory = function($http){
    var factory = {};
    factory.album = {};
    factory.albums = [];

    factory.getAlbums = function(){
      // allow access to the list of albums
      return  $http.get('http://localhost:8000/albums').success(function(response){
        angular.copy(response, factory.albums);
      });
    };

    factory.getAlbum = function(albumId){
      return  $http.get('http://localhost:8000/albums/' + albumId).success(function(response){
        angular.copy(response, factory.album)});
    };
    return factory;
  };

  albumsFactory.$inject = ['$http'];

  angular.module('musicApp').factory('albumsFactory', albumsFactory);
})();
