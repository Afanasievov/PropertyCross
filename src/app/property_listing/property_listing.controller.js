angular
    .module('app')
    .controller("SearchListingController",
        function ($scope, dataService, $location) {

            $scope.data = dataService.data.currentProperty;

            if (!$scope.data) {
                $location.url('/searchForm');
            }

            $scope.onButtonClick = function () {
                $location.url('/searchResults');
            }

        });