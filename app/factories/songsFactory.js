(function songsFactoryIIFE(){

  // Create a customers factory
  var songsFactory = function($http){
    var factory = {};
    factory.song = {};
    factory.songs = [];

    factory.getSongs = function(){
      // allow access to the list of customers
      return  $http.get('http://localhost:3000/songs').success(function(response){
        angular.copy(response, factory.songs);
      });
    };

    factory.getSong = function(songId){
      return  $http.get('http://localhost:3000/songs/' + songId).success(function(response){
        angular.copy(response, factory.customer);
      })
    };
    return factory;
  };

  customersFactory.$inject = ['$http'];

  angular.module('musicApp').factory('customersFactory', customersFactory);
})();
