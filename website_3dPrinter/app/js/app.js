'use strict';

var dependencies = [
  'js/controllers/MainController.js',
  'js/directives/Jsc3dDirective.js',
  'angular'
];

define(dependencies, function(MainController, Jsc3dDirective) {

  angular.module('uukp',['ngRoute', 'ui.bootstrap']);

  angular.module('uukp').run(['$rootScope', '$location', '$anchorScroll', '$routeParams', function($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$viewContentLoaded', function(newRoute, oldRoute) {
      $anchorScroll();
    });
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $anchorScroll();
    });
  }]);

  angular.module('uukp').config(['$routeProvider',
    function($routeProvider, $routeParams) {
      $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
      }).
      when('/guide/:guide', {
        templateUrl: function(routeParams) {
          return 'partials/guides/' + routeParams.guide + '.html';
        }
      }).
      otherwise('/');
    }]);

  angular.module('uukp').controller('MainController', MainController);
  angular.module('uukp').directive('model', Jsc3dDirective);
});