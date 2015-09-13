'use strict';

/**
 * @ngdoc overview
 * @name iotAppApp
 * @description
 * # iotAppApp
 *
 * Main module of the application.
 */
angular
  .module('iotAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hue'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/hue', {
        templateUrl: 'views/hue.html',
        controller: 'HueCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
