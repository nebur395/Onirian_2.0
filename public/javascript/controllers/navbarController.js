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

        $(document).ready(function(){

            // SMOOTH SCROLLING SECTION

            // Add smooth scrolling on all links inside the navbar
            $("#navbarStyle a, #toTopButton a").on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {

                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });

            // SCROLLSPY SECTION

            // Cache selectors
            var lastId,
                topMenu = $("#navbarStyle"),
                topMenuHeight = 47, // navbar height offset
                // All list items
                menuItems = topMenu.find("ul > li a"),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function () {
                    var item = $($(this).attr("href"));
                    if (item.length) { return item; }
                });

            $(window).scroll(function(e){
                // Get container scroll position
                var fromTop = $(this).scrollTop() + topMenuHeight;

                // Possible ids of current scroll item
                var cur = scrollItems.map(function () {
                    if ($(this).offset().top < fromTop) return this;

                });

                // Get the id of the current element
                cur = cur[cur.length-1];
                var id = cur && cur.length ? cur[0].id : "";

                if ($(window).scrollTop() +  window.innerHeight + 115 >= $(document).height())
                    id = "onirianMusic";

                if ($(window).scrollTop() +  window.innerHeight == $(document).height())
                    id = "onirianContact";

                if (id == "onirianHome") {
                    $("#toTopButton a").removeClass("appear");
                    $("#toTopButton a").addClass("disappear");
                }

                if (id != "onirianHome") {
                    $("#toTopButton a").removeClass("disappear");
                    $("#toTopButton a").addClass("appear");
                }

                if (lastId !== id) {
                    lastId = id;
                    // Set/Remove active class
                    menuItems
                        .parent().removeClass("active")
                        .end().filter("[href='#" + id + "']").parent().addClass("active");
                }
            });
        });
    }]);
