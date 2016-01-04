angular
    .module('app')
    .service('dataService',
    function () {
        this.data = {
            searchResponse: null,
            currentProperty: null
        };
    });