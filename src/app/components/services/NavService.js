(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      
      {
        name: 'Nuvens',
        icon: 'cloud',
        sref: '.nuvens'
      },
      {
        name: 'Gráficos',
        icon: 'insert_chart',
        sref: '.graficos'
      },
      {
        name: 'Download',
        icon: 'file_download',
        sref: '.download'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
