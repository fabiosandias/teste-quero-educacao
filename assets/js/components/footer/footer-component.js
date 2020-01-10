'use strict';

require('angular')
    .module('queroEducacao')
    .component('footer', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./footer.html'),
        controller: class Footer {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });