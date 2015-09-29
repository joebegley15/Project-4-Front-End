(function songsControllerIIFE(){

  var SongsController = function(songsFactory, appSettings){

    $scope.navbarCollapsed = true;


    this.sortBy = "title";
    this.reverse = false;
    this.songs =  songsFactory.songs;
    this.song = songsFactory.song;
    this.appSettings = appSettings;

    function init(){
      // Init the songs from the factory
      songsFactory.getSongs();
    };

    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 SongsController.$inject = ['songsFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('musicApp').controller('songsController', SongsController);

})();
