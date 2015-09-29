(function listsControllerIIFE(){

  var ListsController = function(listsFactory, appSettings){

    // $scope.navbarCollapsed = true;


    this.sortBy = "title";
    this.reverse = false;
    this.lists =  listsFactory.lists;
    this.list = listsFactory.list;
    this.appSettings = appSettings;

    function init(){
      // Init the lists from the factory
      listsFactory.getLists();
    };

    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 ListsController.$inject = ['listsFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('musicApp').controller('listsController', ListsController);

})();
