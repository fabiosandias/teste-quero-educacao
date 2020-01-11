'use strict';
export default class ScholarshipsService {

    /**
     * @param {$http} $http
     * @param {$localStorage} $localStorage
     * @param {ScholarshipsFactory} ScholarshipsFactory
     */
    constructor($http, $localStorage, ScholarshipsFactory) {
        'ngInject';

        this.http = $http;
        this.localStorage = $localStorage;
        this.scholarshipsFactory = ScholarshipsFactory;
    }

    getAll() {
        return this.scholarshipsFactory.get().then(response => response.data);
    }
}
