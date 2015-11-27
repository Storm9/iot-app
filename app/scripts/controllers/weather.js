'use strict';

angular.module('iotAppApp')
  .controller('WeatherCtrl', function ($resource) {
    var vm = this;

    var WeatherReport = $resource('https://api.forecast.io/forecast/df5513b0e60704f900cf7096b523f3bb/:lat,:long',
      {lat: '41.8333925', long: '-88.0123477'});

    WeatherReport.get(function (weather) {
      vm.weather = weather;
    });

  });
