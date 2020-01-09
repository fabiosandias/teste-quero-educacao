'use strict';

require('babel-polyfill');

window.jQuery = require('jquery');

const angular = require('angular');


angular.module('queroEducacao', [
    require('ngstorage').name,
    require('@uirouter/angularjs').default,
    require('angular-animate'),
    require('angular-sanitize'),
    require('angular-messages'),
]);

angular.module('queroEducacao').constant('moment', require('moment-timezone'));

require('./assets/js/components');
require('./assets/js/directives');
require('./config');
require('./routes');
require('./assets/js/services');

require('angular-i18n/angular-locale_pt-br');