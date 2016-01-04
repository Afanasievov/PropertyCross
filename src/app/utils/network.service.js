angular
    .module('app')
    .service('networkService',
    function ($http) {

        this.getData = function (place) {

            return $http.get('http://api.nestoria.co.uk/api?country=uk&pretty=1&action='
                + 'search_listings&encoding=json&listing_type=buy&page=1&place_name='
                + place);

        };

    });