'use strict';

require('angular')
    .module('queroEducacao')
    .component('favorites', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./favorites.html'),
        controller: class Favorites {

            constructor() {
                'ngInject';
            }

            $onInit() {


            }
        }
    });