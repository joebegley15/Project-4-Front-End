(function songsControllerIIFE(){

  var SongsController = function(songsFactory, appSettings){
    this.sortBy = "title";
    this.reverse = false;
    this.songs =  songsFactory.songs;
    this.song = songsFactory.song;
    this.appSettings = appSettings;

    function init(){
      // Init the customers from the factory
      //this.customers = customersFactory.getCustomers();
      songsFactory.getSongs();
    }

    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 SongsController.$inject = ['songsFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('songsApp').controller('songsController', SongsController);

})();
