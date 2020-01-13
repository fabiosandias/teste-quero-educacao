'use strict';
require('angular')
    .module('queroEducacao')
    .component('searchResultCard', {
        bindings: {
            course: "=",
            index: "=",
            myFavorites: "=",
            uuid: "=",
            favorites: "="
        },
        controllerAs: 'vm',
        template: require('./search-result-card.html'),
        controller: class SearchResultCard {

            constructor() {
                'ngInject';

            }

            setMyFavorites(course) {
                if (!this.myFavorites.find(mf => mf.uuid === course.uuid))
                    this.myFavorites.push(course);
            }
        }
    });