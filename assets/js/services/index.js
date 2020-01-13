'use strict';
import ScholarshipsService from './scholarshipsService';
import UuidService from './UuidService';
import ScholarshipsFactory from './ScholarshipsFactory';
import CourseService from './CourseService';

require('angular')
    .module('queroEducacao')
    .service('ScholarshipsService', ScholarshipsService)
    .service('UuidService', UuidService)
    .factory('ScholarshipsFactory', ScholarshipsFactory)
    .service('CourseService', CourseService);



