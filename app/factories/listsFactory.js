(function songsFactoryIIFE(){

  // Creates a lists factory
  var listsFactory = function($http){
    var factory = {};
    factory.list = {};
    factory.lists = [];

    factory.getLists = function(){
      // allow access to the list of lists
      return  $http.get('http://localhost:8000/lists').success(function(response){
        angular.copy(response, factory.lists);
      });
    };

    factory.getList = function(listId){
      return  $http.get('http://localhost:8000/lists/' + listId).success(function(response){
        angular.copy(response, factory.list)});
    };
    return factory;
  };

  listsFactory.$inject = ['$http'];

  angular.module('musicApp').factory('listsFactory', listsFactory);
})();
