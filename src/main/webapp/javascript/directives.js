angular.module('onirianApp', [])

    // include the 'concerts.html' into the <concerts> tag
    .directive('concerts', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/concerts.html',
            controller: 'concertsCtrl'
        }
    })

    // include the 'band.html' into the <band> tag
    .directive('band', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/band.html',
            controller: 'bandCtrl'
        }
    })

    // include the 'navbar.html' into the <navbar> tag
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/navbar.html',
            controller: 'navbarCtrl'
        }
    })

    // include the 'music.html' into the <music> tag
    .directive('music', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/music.html',
            controller: 'musicCtrl'
        }
    })

    // include the 'customSlideshow.html' into the <custom-slideshow> tag
    .directive('customSlideshow', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/customSlideshow.html',
            controller: 'slideshowCtrl'
        }
    });
