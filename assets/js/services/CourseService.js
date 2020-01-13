'use strict';


import {forEach} from "@uirouter/core";

const angular = require('angular');

export default class TaskService {

    /**
     * @param {$localStorage} $localStorage
     */
    constructor($localStorage) {

        'ngInject';

        this.localStorage = $localStorage;

        this.checkForMyFavorites()

    }

    checkForMyFavorites() {
        delete this.localStorage.myFatorites;
        if(!this.localStorage.myFavorites) {
            this.localStorage.myFavorites = [];
        }
    }


    save(courses) {
        this.checkForMyFavorites();


        courses.courses.forEach((course, i) => {
            const isMyFavorites = this.localStorage.myFavorites.find(myF => myF.uuid === course.uuid);
            if (!isMyFavorites) {
                this.localStorage.myFavorites.push(course);
            }
        });

    }

    saveSearchResult(courses) {
        this.localStorage.searchResult = courses;
    }

    getSearchResult() {
        return this.localStorage.searchResult;
    }

    getAll() {
        if (this.localStorage.myFavorites && this.localStorage.myFavorites.length > 0)
            return this.localStorage.myFavorites;

        return undefined;
    }

    deleteById(uuid) {
        this.localStorage.myFavorites.forEach((course, index) => {

            if (course.uuid === uuid) {
                this.localStorage.myFavorites.splice(index, 1);
            }
        });
    }
}