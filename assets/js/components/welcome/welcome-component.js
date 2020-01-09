'use strict';

require('angular')
    .module('queroEducacao')
    .component('welcome', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./welcome.html'),
        controller: class Welcome {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });