'use strict';

require('angular')
    .module('queroEducacao')
    .component('header', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./header.html'),
        controller: class Welcome {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });