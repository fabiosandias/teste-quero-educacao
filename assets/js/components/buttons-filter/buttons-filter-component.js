'use strict';

require('angular')
    .module('queroEducacao')
    .component('buttonsFilter', {
        bindings: {
            filterBySemesterSecond: "&",
            filterBySemesterFirst: "&",
            showAll: "&",
        },
        controllerAs: 'vm',
        template: require('./buttons-filter.html'),
        controller: class ButtonsFilter {

            constructor() {
                'ngInject';
            }

            $onInit() {
                this.BUTTON_ACTIVE = {
                    FIRST_SEMESTER: false,
                    SECOND_SEMESTER: false,
                    ALL: true
                };

                this.DATES = {
                    FIRST_SEMESTER: {
                        START_DATE: '2020-01-01',
                        END_DATE: '2020-06-30'
                    },
                    SECOND_SEMESTER: {
                        START_DATE: '2019-06-01',
                        END_DATE: '2019-12-30'
                    }
                }

            }


            activeButton(active) {
                const button = ['FIRST_SEMESTER', 'SECOND_SEMESTER', 'ALL'];

                this.BUTTON_ACTIVE[active] = true;

                button.filter(bt => bt !== active).forEach((a) => this.BUTTON_ACTIVE[a] = false);
            }
        }
    });