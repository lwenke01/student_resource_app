


angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

  // home page


  // blogss page that will use the BlogController

  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'BlogController'
  });

  //  .when('/:_id', {
  //        templateUrl: 'views/blog-id.html',
  //        controller: 'IdController'
  //      });

  $locationProvider.html5Mode(true);

}]);
