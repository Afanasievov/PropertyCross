angular
    .module('app')
    .controller("SearchFormController",
    function($scope, networkService, dataService, $location){

        $scope.data = {
            place: null,
            error: null,
            loader: false
        };

        $scope.onFocus = function () {
            $scope.data.error = null;
        };

        $scope.onSubmit = function() {
            $scope.data.loader = true;
            networkService.getData($scope.data.place)
                .success(function (response) {
                    dataService.data.searchResponse = response;
                    $location.url('/searchResults');
                    console.log('$http.get success!', response);
                })
                .error(function (error) {
                    $scope.data.error = 'request error!' + error;
                })
                .finally(function () {
                    $scope.data.loader = false;
                });
        }

    });