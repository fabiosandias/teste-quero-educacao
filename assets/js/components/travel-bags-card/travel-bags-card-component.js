'use strict';

require('angular')
    .module('queroEducacao')
    .component('travelBagsCard', {
        bindings: {
            isButton: "=",
            scholarship: "="
        },
        controllerAs: 'vm',
        template: require('./travel-bags-card.html'),
        controller: class TravelBagsCard {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });