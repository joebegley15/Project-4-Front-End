(function articlesControllerIIFE(){

  var ArticlesController = function(articlesFactory, appSettings){
    this.sortBy = "title";
    this.reverse = false;
    this.songs =  articlesFactory.articles;
    this.article = articlesFactory.article;
    this.appSettings = appSettings;

    function init(){
      // Init the articles from the factory
      articlesFactory.getArticles();
    };

    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 ArticlesController.$inject = ['articlesFactory', 'appSettings'];

angular.module('musicApp').controller('articlesController', ArticlesController);

})();
