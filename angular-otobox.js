var angularOtobox = angular.module('angular-otobox', []);
var s = new Array();
var i = 0;

/**
 * @name otobox
 * @summary setts configs of otobox from attribiutes of element
 * @param $attrs - all the configs must be hardcoded on element
 **/
angularOtobox.directive("otobox", ['$timeout', function ($timeout) {
  return {
    require: "?otoboxConfig",
    link: function ($scope, $element, $attrs, otoboxConfigCtrl) {
      // wating untile template generated
      $timeout(function () {

        // initiating otobox for the current element
        s[i] = new otobox($element[0]);

        // adding activator
        var config = new Object();
        if ($scope.config instanceof Array) {
          // Adding multiple activators for a single emenet is only possible using otoboxConfig directive 
          for (var j = 0; j < $scope.config.length; j++) {
            s[i].addActivator($scope.config[j]);
          };
        } else {
          config = {
              name: $attrs.otobox,
              key: $attrs.otoboxKey,
              customChoice: $attrs.otoboxCustomChoice || false,
              includeKey: $attrs.otoboxIncludeKey || true,
              allowedChars: new RegExp($attrs.otoboxAllowedChars),
              source: $attrs.otoboxSource,
              displayKey: $attrs.otoboxDisplayKey,
              valueKey: $attrs.otoboxValueKey
          }
          s[i].addActivator(config);
        }
        // going for next element
        i ++;
      });
    }
  }
}]);