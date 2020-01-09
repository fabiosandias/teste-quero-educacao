'use strict';
import Enums from './Enums';
import TaskService from './TaskService';
import UuidService from './UuidService';

require('angular')
    .module('queroEducacao')
    .service('Enums', Enums)
    .service('TaskService', TaskService)
    .service('UuidService', UuidService);



