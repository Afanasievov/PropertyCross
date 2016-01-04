angular
    .module('app',
    [
        'ngRoute',
        'ngMessages'
    ])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/searchForm', {
                templateUrl: 'app/search_form/search_form.template.html',
                controller: 'SearchFormController'
            })
            .when('/searchListing', {
                templateUrl: 'app/property_listing/property_listing.template.html',
                controller: 'SearchListingController'
            })
            .when('/searchResults', {
                templateUrl: 'app/search_results/search_results.template.html',
                controller: 'SearchResultsController'
            })
            .otherwise({
                redirectTo: '/searchForm'
            });
    });