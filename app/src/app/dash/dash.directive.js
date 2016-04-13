(function() {
    'use strict';

    angular
        .module('app')
        .directive('appDash', appDash);

    function appDash($window) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                'message': '='
            },
            controller: DashController,
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl: 'dash/dash.html',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    function DashController () {
        
    }
})();