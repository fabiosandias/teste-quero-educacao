'use strict';
import data from './data';
require('angular')
    .module('queroEducacao')
    .component('favorites', {
        bindings: {
        },
        controllerAs: 'vm',
        template: require('./favorites.html'),
        controller: class Favorites {

            constructor(ScholarshipsService, $scope) {
                'ngInject';

                this.ScholarshipsService = ScholarshipsService;
                this.$scope = $scope;
            }

            $onInit() {
                this.loading = true;
                this.scholarships = [];

                this.ScholarshipsService.getAll().then((response) => {
                    this.scholarships = response;
                    this.copyScholarships = response;
                    this.$scope.$apply();


                }).finally(() => {
                    this.loading = false;
                    this.$scope.$apply();
                });

            }

            filterBySemester(dates) {

                const sd = new Date(dates.startDate);
                const ed = new Date(dates.endDate);
                let dt = {};
                this.scholarships = [];

                this.scholarships = this.copyScholarships.filter((date) => {
                    dt = new Date(this.reverseDate(date.start_date));
                    return dt.getTime() >= sd.getTime() && dt.getTime() <= ed.getTime();
                })
            }

            showAll() {
                this.scholarships =  this.copyScholarships;
            }

            reverseDate(date) {
                let dt = date.split('/');
                return `${dt[2]}-${dt[1]}-${dt[0]}`;
            }
        }
    });