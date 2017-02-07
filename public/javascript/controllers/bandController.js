angular.module('onirianApp')

    .controller('bandCtrl', ['$scope', function ($scope) {

        var lightboxIndex = 1;

        $scope.openLightbox = function (n) {
            document.getElementById('lightboxModal').style.display = "block";
        };

        $scope.closeLightbox = function (n) {
            document.getElementById('lightboxModal').style.display = "none";
        };

        $scope.plusLightbox = function (n) {
            $scope.showLightbox(lightboxIndex += n);
        };

        $scope.currentLightbox = function (n) {
            $scope.showLightbox(lightboxIndex = n);
        };

        $scope.showLightbox = function (n) {
            var i;
            var slides = document.getElementsByClassName("myLightbox");
            var dots = document.getElementsByClassName("demo");
            var captionText = document.getElementById("caption");
            if (n > slides.length) {lightboxIndex = 1}
            if (n < 1) {lightboxIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[lightboxIndex-1].style.display = "block";
            dots[lightboxIndex-1].className += " active";
            captionText.innerHTML = dots[lightboxIndex-1].alt;
        };
        $scope.showLightbox(lightboxIndex);
    }]);
