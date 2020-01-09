'use strict';

let angular = require('angular');

module.exports = Enums;


function Enums() {
    return {
        TASKS_STATUS: {
            COMPLETED: 'Completed',
            OPENED: 'Opened'
        }
    };
}

