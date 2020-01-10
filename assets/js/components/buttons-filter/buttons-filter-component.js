'use strict';

require('angular')
    .module('queroEducacao')
    .component('buttonsFilter', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./buttons-filter.html'),
        controller: class ButtonsFilter {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });