angular.module('onirianApp')

    // include the 'navbar.html' into the <navbar> tag
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/navbar.html',
            controller: 'navbarCtrl'
        }
    })

    // include the 'concerts.html' into the <concerts> tag
    .directive('concerts', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/concerts.html',
            controller: 'recordCtrl',
            scope: true
        }
    })

    //include the 'exerciserCard.html' into the <exerciserCard> tag
    .directive('band', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/band.html'
        }
    });
