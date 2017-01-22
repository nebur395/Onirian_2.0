angular.module('onirianApp')

    .controller('slideshowCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

        var slideIndex = 1;
        var timer;

        $scope.plusSlides = function (n) {
            $scope.showSlides(slideIndex += n);
        };

        $scope.currentSlide = function (n) {
            $scope.showSlides(slideIndex = n);
        };

        $scope.showSlides = function (n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
            $timeout.cancel(timer);
            timer = $timeout(function() {
                $scope.plusSlides(1);}, 4000); // Change image every 4 seconds
        };
        $scope.showSlides(slideIndex);
    }]);
