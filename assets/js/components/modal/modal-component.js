'use strict';

const COURSE_MODALITY = {
    AED: 'EaD',
    PRESENTIAL: 'Presencial',
};

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

                if (!this.option) {
                    this.option = [];
                }
                if (!this.copyCourse) {
                    this.copyCourse = this.courses;
                }


                this.createOptionCourse();

                this.optionCoursePrice = [
                    {id: 1, value: '50.0 | 200.0', label: 'de R$50,00 a R$ 200,00'},
                    {id: 1, value: '200.0 | 500.0', label: 'de R$200,00 a R$ 500,00'},
                    {id: 1, value: '500.0 | 1000.0', label: 'de R$500,00 a R$ 1.000,00'},
                    {id: 1, value: '1000.0 | 1500.0', label: 'de R$1.000,00 a R$ 1.500,00'},
                    {id: 1, value: '1500.0 | 2000.0', label: 'de R$1.500,00 a R$ 2.000,00'},
                    {id: 1, value: '2500.0 | 3000.0', label: 'de R$2.500,00 a R$ 3.000,00'},
                    {id: 1, value: '3000.0 | 4000.0', label: 'de R$3.000,00 a R$ 4.000,00'},
                    {id: 1, value: '4000.0 | 5000.0', label: 'de R$4.000,00 a R$ 5.000,00'},
                    {id: 1, value: '5000.0 | 6000.0', label: 'de R$5.000,00 a R$ 6.000,00'},
                    {id: 1, value: '6000.0 | 7000.0', label: 'de R$6.000,00 a R$ 7.000,00'},
                    {id: 1, value: '7000.0 | 8000.0', label: 'de R$7.000,00 a R$ 8.000,00'},
                    {id: 1, value: '8000.0 | 9000.0', label: 'de R$8.000,00 a R$ 9.000,00'},
                    {id: 1, value: '9000.0 | 10000.0', label: 'de R$9.000,00 a R$ 10.000,00'},
                ];
            }



            clearMyFavorites() {
                this.myFavorites = [];
                this.favorites = [];
                this.search.type = undefined;
                this.search.city = undefined;
                this.search.price = undefined;
                this.search.Presencial = undefined;
                this.search.ead = undefined;
                this.courses = this.copyCourse;

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
                this.courses = this.copyCourse;

                if (this.search.city) {

                    this.filterByCity();
                }

                if (this.search.type) {
                    this.filterByCourse();
                }

                if (this.search.ead || this.search.Presencial) {
                    this.filterByModality();
                }
                if (this.search.price) {
                    this.filterByPrice();
                }

            }

            filterByCity() {
                if (!this.search.city)
                    return false;
                this.courses = this.courses.filter(o =>
                    Object.keys(o.campus).some(k => o.campus.city.toUpperCase().includes(this.search.city.toUpperCase())))
            }

            filterByModality() {
                this.courses = this.courses.filter(o => {
                    if (this.search.ead && this.search.Presencial) {
                        return o.course.kind.toUpperCase() === COURSE_MODALITY.PRESENTIAL.toUpperCase() && o.course.kind.toUpperCase() === COURSE_MODALITY.AED.toUpperCase()
                    }

                    if (!this.search.ead && this.search.Presencial) {
                        return o.course.kind.toUpperCase() === COURSE_MODALITY.PRESENTIAL.toUpperCase();
                    }

                    if (this.search.ead && !this.search.Presencial) {
                        return o.course.kind.toUpperCase() === COURSE_MODALITY.AED.toUpperCase();
                    }
                });
            }

            filterByPrice() {
                const value = this.search.price.split('|');
                this.courses = this.courses.filter(o => o.price_with_discount >= parseFloat(value[0]) && o.price_with_discount <= parseFloat(value[1]));
            }

            filterByCourse() {
                this.courses = this.courses.filter(o => o.course.name.toUpperCase() === this.search.type.toUpperCase());
            }


            createOptionCourse() {
                this.option = this.copyCourse.map((course, i) => {
                  return {id: i + 1, value: course.course.name, label: course.course.name}
                },[]);
            }
        }
    });