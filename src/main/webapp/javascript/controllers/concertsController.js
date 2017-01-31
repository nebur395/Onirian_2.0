angular.module('onirianApp')

    .controller('concertsCtrl', ['$scope', function ($scope) {

        $scope.concertsList = [
            {date:'04.02.2017', place:'Jabalistreffen', link:'https://goo.gl/BDIKrH'},
            {date:'12.11.2016', place:'El Túnel', link:'https://goo.gl/oEuIcM'},
            {date:'02.09.2016', place:'Jardín de la memoria', link:'https://goo.gl/9YDHGi'},
            {date:'27.02.2016', place:'Dpech Rock', link:'https://goo.gl/6dOQzP'},
            {date:'24.10.2015', place:'Sala Zeta', link:'https://goo.gl/BPaGI2'}
        ];
    }]);
