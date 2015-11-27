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
        templateUrl: 'views/hue.html',
        controller: 'HueCtrl',
        controllerAs: 'vm'
      })
      .when('/weather',{
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'vm'
      })
      .when('/transit',{
        templateUrl: 'views/transit.html',
        controller: 'TransitCtrl',
        controllerAs: 'vm'
      })
      .when('/spotify',{
        templateUrl: 'views/spotify.html'
      })
      .when('/nest',{
        templateUrl: 'views/nest.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
