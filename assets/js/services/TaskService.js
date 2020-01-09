'use strict';

import {forEach} from "@uirouter/core";

const angular = require('angular');

export default class TaskService {

    /**
     * @param {Enums} Enums
     * @param {$localStorage} $localStorage
     * @param {$state} $state
     */
    constructor(Enums, $localStorage, $state) {

        'ngInject';

        this.enums = Enums;
        this.localStorage = $localStorage;
        this.state = $state;

        this.checkForTasks()

    }

    checkForTasks() {
        if(!this.localStorage.tasks) {
            this.localStorage.tasks = [];
        }
    }

    goToNextStep(nextStep, params) {
        this.state.go(nextStep, params);
    }

    save(task) {
        this.checkForTasks();
        this.localStorage.tasks.push(task);
    }

    getAll() {
        if (this.localStorage.tasks && this.localStorage.tasks.length > 0)
            return this.localStorage.tasks;

        return undefined;
    }

    getById(id) {
        return this.localStorage.tasks && this.localStorage.tasks.find(task => task.uuid === id);
    }

    deleteAll() {
        delete this.localStorage.tasks;
    }

    deleteById(id) {
        this.localStorage.tasks.forEach((task, index) => {

            if (task.uuid === id) {
               this.localStorage.tasks.pop(index);
           }
        });
    }

    updateTaskById(id, taskUpdate) {
        this.localStorage.tasks.forEach((task, index) => {
            debugger;
            if (task.uuid === id) {
                this.localStorage.tasks[index] = taskUpdate;
            }
        });
    }


}