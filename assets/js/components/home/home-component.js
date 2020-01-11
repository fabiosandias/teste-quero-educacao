'use strict';
require('angular')
    .module('queroEducacao')
    .component('home', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./home.html'),
        controller: class Home {

            constructor() {
                'ngInject';

            }
        }
    });