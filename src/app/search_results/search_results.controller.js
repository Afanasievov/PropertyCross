angular
    .module('app')
    .controller("SearchResultsController",
    function ($scope, dataService, $location) {

        $scope.data = {
            results: dataService.data.searchResponse,
            searchError: false

        };

        if (!$scope.data.results) {
            $location.url('/searchForm');
            return;
        }

        if ($scope.data.results.response.application_response_code.slice(0,1) == 2) {
            $scope.data.searchError = true;
        }

        $scope.onButtonClick = function () {
            $location.url('/searchForm');
            console.log($scope.data.searchError)
        };

        $scope.onPropertyClick = function (item) {
            dataService.data.currentProperty = item;
            $location.url('/searchListing');
        };

    });