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
    })

    // include the 'navbar.html' into the <navbar> tag
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/navbar.html'
        }
    })

    // include the 'customSlideshow.html' into the <custom-slideshow> tag
    .directive('customSlideshow', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/customSlideshow.html'
        }
    });
