angular.module('onirianApp')

    .controller('slideshowCtrl', ['$scope', function ($scope) {

        $scope.predeterminedExercises = [];    // predetermined exercises
        $scope.predeterminedMG = [];    // predetermined muscle groups
        $scope.predeterminedCardioExercises = [];    // predetermined cardio exercises
        $scope.predeterminedCardioTypes = [];    // predetermined cardio types

        $scope.getPredetermined = function () {
            exerciseService.getPredetermined(function (predeterminedMG,predeterminedExercises, cardioTypes, cardioExercises) {
                $scope.predeterminedMG = predeterminedMG;
                $scope.predeterminedExercises = predeterminedExercises;
                $scope.predeterminedCardioTypes = cardioTypes;
                $scope.predeterminedCardioExercises = cardioExercises;
            },showError);
        };
    }]);
