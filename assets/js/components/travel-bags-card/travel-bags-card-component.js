'use strict';

require('angular')
    .module('queroEducacao')
    .component('travelBagsCard', {
        bindings: {
            isButton: "=",
            scholarship: "=",
            add: "&",
            deleteFavoriteCourse: "&"
        },
        controllerAs: 'vm',
        template: require('./travel-bags-card.html'),
        controller: class TravelBagsCard {

            constructor(CourseService) {
                'ngInject';

                this.CourseService = CourseService;
            }
        }
    });