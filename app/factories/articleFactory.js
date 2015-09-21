(function articlesFactoryIIFE(){

  // Creates a articles factory
  var articlesFactory = function($http){
    var factory = {};
    factory.article = {};
    factory.articles = [];

    factory.getArticles = function(){
      // allow access to the list of articles
      return  $http.get('https://frozen-wave-7557.herokuapp.com/articles').success(function(response){
        angular.copy(response, factory.articles);
      });
    };

    factory.getArticle = function(songId){
      return  $http.get('https://frozen-wave-7557.herokuapp.com/articles/' + articleId).success(function(response){
        angular.copy(response, factory.article)});
    };
    return factory;
  };

  articlesFactory.$inject = ['$http'];

  angular.module('musicApp').factory('articlesFactory', articlesFactory);
})();
