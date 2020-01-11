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
        .state('welcome.home', {
            url: 'home',
            template: `<home></home>`,
        })
        .state('welcome.favorites', {
            url: 'favorites',
            template: `<favorites></favorites>`,
        })
        .state('welcome.prePegistration', {
            url: 'pre-registration',
            template: `<pre-registration></pre-registration>`,
        });


    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

}
