'use strict';
require('angular')
    .module('queroEducacao')
    .component('preRegistration', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./pre-registration.html'),
        controller: class PreRegistration {

            constructor() {
                'ngInject';

            }

        }
    });