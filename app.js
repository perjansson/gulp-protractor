(function() {
  'use strict';

  angular
    .module('gulpProtractorApp', [])
    .controller('MainController', function Page1Controller() {
      var vm = this;
      vm.message = "Hello Protractor world!";
    });

})();
