'use strict';

require('angular')
    .module('queroEducacao')
    .config(routes);

function routes($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('welcome', {
            url: '/',
            template: `<welcome></welcome>`,
        })



    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

}
