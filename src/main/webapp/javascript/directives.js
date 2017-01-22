angular.module('onirianApp', [])

    // include the 'concerts.html' into the <concerts> tag
    .directive('concerts', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/concerts.html'
        }
    })

    // include the 'band.html' into the <band> tag
    .directive('band', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/band.html'
        }
    });
