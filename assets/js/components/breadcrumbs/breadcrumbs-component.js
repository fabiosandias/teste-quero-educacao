'use strict';

require('angular')
    .module('queroEducacao')
    .component('breadcrumbs', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./breadcrumbs.html'),
        controller: class Breadcrumbs {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });