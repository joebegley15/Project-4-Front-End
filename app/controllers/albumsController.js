(function albumsControllerIIFE(){

  var AlbumsController = function(albumsFactory, appSettings){
    this.sortBy = "title";
    this.reverse = false;
    this.albums =  albumsFactory.albums;
    this.album = albumsFactory.album;
    this.appSettings = appSettings;

    function init(){
      // Init the albums from the factory
      albumsFactory.getAlbums();
    };

    init();

    this.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

  };

 AlbumsController.$inject = ['albumsFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('musicApp').controller('albumsController', AlbumsController);

})();
