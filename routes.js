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
        .state('welcome.favorites', {
            url: 'favorites',
            template: `<favorites></favorites>`,
        })


    $urlRouterProvider.when('', '/favorites');
    $urlRouterProvider.otherwise('/');

}
