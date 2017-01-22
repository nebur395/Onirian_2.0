angular.module('onirianApp')

    .controller('navbarCtrl', ['$scope', function ($scope) {

        // Used to toggle the menu on small screens when clicking on the menu button
        $scope.myFunction = function () {
            var x = document.getElementById("navDemo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        };

    }]);
