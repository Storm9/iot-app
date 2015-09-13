'use strict';

angular.module('iotAppApp')
  .controller('HueCtrl', function (hue) {
    var vm = this;

    vm.title = 'Hue Light Controls';

    // Get all lights
    var myHue = hue;
    myHue.setup({username: 'newdeveloper', bridgeIP: '10.0.1.2', debug: true});

    function turnOffLights() {
      myHue.setLightState(4, {"on": false});
    }

    function turnOnLights() {
      myHue.setLightState(4, {"on": true});
    }

    function init() {
      vm.turnOffLights = turnOffLights;
      vm.turnOnLights = turnOnLights;
    }
    init();
  });
