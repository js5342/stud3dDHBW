requirejs.config({
  appDir: ".",
//  baseUrl: "",
  paths: {
    'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min',
    'angular-route' : 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min',
    'angular-bootstrap-tpl' : 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap-tpls.min',
    'angular-bootstrap' : 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap.min',
    'ng-animate': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate',
    'jsc3d': '../3rd/jsc3d/jsc3d.min',
    'app': 'js/app'
  },
  shim: {
    'angular' : [],
    'angular-route' : ['angular'],
    'angular-bootstrap-tpl' : ['angular', 'angular-bootstrap'],
    'angular-bootstrap' : ['angular'],
    'ng-animate' : ['angular'],
    'app' : ['angular', 'angular-route', 'jsc3d']
  }
});

require(['angular', 'angular-bootstrap', 'angular-bootstrap-tpl', 'angular-route', 'ng-animate', 'app'], function() {

  angular.element(document).ready(function() {
    var uukpApp = angular.bootstrap(document, ['uukp']);
  });
});