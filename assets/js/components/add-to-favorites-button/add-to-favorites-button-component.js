'use strict';

require('angular')
    .module('queroEducacao')
    .component('addToFavoritesButton', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./add-to-favorites-button.html'),
        controller: class AddToFavoritesButton {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });