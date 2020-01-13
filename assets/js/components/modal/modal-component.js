'use strict';
require('angular')
    .module('queroEducacao')
    .component('modal', {
        bindings: {
            courses: "=",
            add: "&",
            modalOpen: "&"
        },
        controllerAs: 'vm',
        template: require('./modal.html'),
        controller: class Modal {

            constructor(CourseService) {
                'ngInject';
                this.CourseService = CourseService;
            }

            $onInit() {
                this.search = {};
                this.search.city = '';
                this.myFavorites = [];
                this.favorites = [];
                this.option = [];
                this.copyCourse = this.courses;


                this.createOptionCourse();
            }

            clearMyFavorites() {
                this.myFavorites = [];
                this.favorites = [];
            }

            enabledButton() {
                if (this.favorites.length > 0)
                    return this.favorites.some(course => course);
                else
                    return false
            }

            sortUniversityName() {
                this.courses.sort((a, b) => {
                    if ( a.university.name < b.university.name ){
                        return -1;
                    }
                    if ( a.university.name > b.university.name ){
                        return 1;
                    }
                    return 0;
                })

            }

            filterAll() {
                if (!this.search.city) {
                    this.courses = this.copyCourse;
                }
                this.courses = this.copyCourse.filter(o =>
                    Object.keys(o.campus).some(k => o.campus.city.toUpperCase().includes(this.search.city.toUpperCase())));
            }

            filterModality(modality) {
                this.courses = this.copyCourse.filter(o => o.course.kind.toUpperCase() === modality.toUpperCase());
            }

            filterByCourse(course) {
                this.courses = this.copyCourse.filter(o => o.course.name.toUpperCase() === course.toUpperCase());
            }


            createOptionCourse() {
                this.option = this.copyCourse.map((course, i) => {
                  return {id: i + 1, value: course.course.name, label: course.course.name}
                },[]);
            }
        }
    });