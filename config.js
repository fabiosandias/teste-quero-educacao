
'use strict';

import { StickyStatesPlugin } from "@uirouter/sticky-states";

const dev = document.location.hostname.match(/^127.0.0.1:8080/);

require('angular')
    .module('queroEducacao')
    .config(config)
    .run(run);

/* @ngInject */
function config($logProvider, $compileProvider, $httpProvider, $locationProvider, $animateProvider, $qProvider, $uiRouterProvider) {

    $qProvider.errorOnUnhandledRejections(false);

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded';

    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; //TODO: verificar se isso resolve pra todos os métodos

    $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);

    $locationProvider
        .html5Mode({
            enabled: false,
            requireBase: false,
            rewriteLinks: false
        });
    $uiRouterProvider.plugin(StickyStatesPlugin);
}

/* @ngInject */
function run($http, $httpParamSerializerJQLike) {

}