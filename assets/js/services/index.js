'use strict';
import ScholarshipsService from './scholarshipsService';
import ScholarshipsFactory from './ScholarshipsFactory';

require('angular')
    .module('queroEducacao')
    .service('ScholarshipsService', ScholarshipsService)
    .factory('ScholarshipsFactory', ScholarshipsFactory);



