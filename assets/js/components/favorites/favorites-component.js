'use strict';

require('angular')
    .module('queroEducacao')
    .component('favorites', {
        bindings: {

        },
        controllerAs: 'vm',
        template: require('./favorites.html'),
        controller: class Favorites {

            constructor(ScholarshipsService, $scope, $rootScope, UuidService, CourseService) {
                'ngInject';

                this.ScholarshipsService = ScholarshipsService;
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.UuidService = UuidService;
                this.CourseService = CourseService;
            }

            $onInit() {

                if (!this.scholarships)
                    this.scholarships = [];
                // window.localStorage.removeItem('ngStorage-myFavorites');
                // window.localStorage.removeItem('ngStorage-searchResult');

                this.loading = true;

                this.scholarships =  this.CourseService.getSearchResult();
                this.copyScholarships = this.scholarships;

                if (!this.scholarships) {
                    this.searchCourses();
                } else {
                    this.loading = false;
                }
                this.updateMyFavorites();

                this.modalOpen = false;
                this.$rootScope.modalOpen = this.modalOpen;
            }

            searchCourses() {
                this.ScholarshipsService.getAll().then((response) => {
                    this.scholarships =  response.map(course => { return {...course, uuid: this.UuidService.generateUUID()}});
                    this.copyScholarships = this.scholarships;
                    this.CourseService.saveSearchResult(this.scholarships);
                    this.$scope.$apply();

                }).finally(() => {
                    this.loading = false;
                    this.$scope.$apply();
                });
            }

            updateMyFavorites() {
                this.myFovorites = this.CourseService.getAll();
                this.myFovoritesCopy = this.myFovorites;
            }

            filterBySemester(dates) {

                const sd = new Date(dates.startDate);
                const ed = new Date(dates.endDate);
                let dt = {};

                this.myFovorites = this.myFovoritesCopy.filter((date) => {
                    dt = new Date(this.reverseDate(date.start_date));
                    return dt.getTime() >= sd.getTime() && dt.getTime() <= ed.getTime();
                })
            }

            showAll() {
                this.myFovorites =  this.myFovoritesCopy;
            }

            reverseDate(date) {
                let dt = date.split('/');
                return `${dt[2]}-${dt[1]}-${dt[0]}`;
            }

            addFavorites(courses) {
                if(courses) {
                    this.CourseService.save(courses);
                    this.updateMyFavorites();
                }

                this.modalOpen = !this.modalOpen;
                this.$rootScope.modalOpen = this.modalOpen;
                this.updateMyFavorites();
            }

            showAndHideModal(courses) {
                this.modalOpen = !this.modalOpen;
                this.$rootScope.modalOpen = this.modalOpen;
            }

            deleteFavoriteCourse(uuid) {
                this.CourseService.deleteById(uuid);
                this.updateMyFavorites();
            }
        }
    });