(function() {
  'use strict';

  angular
    .module('gulpProtractorApp', [])
    .controller('MainController', function Page1Controller($http, $timeout) {
      var vm = this;
      vm.posts = [];

      var getPosts = function() {
        $http.get("http://localhost:3000/posts")
          .then(function(response) {
            vm.posts = response.data;
          })
      };

      $timeout(getPosts, 3000);

    });

})();
