angular.module('onirianApp')

    .controller('musicCtrl', ['$scope', function ($scope) {

        // When the user clicks anywhere outside of the modal, close it
        var modal = document.getElementById('musicModal');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }]);
