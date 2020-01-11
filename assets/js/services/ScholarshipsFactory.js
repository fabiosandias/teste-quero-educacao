'use strict';

const url = 'https://testapi.io/api/redealumni/scholarships';

module.exports = ScholarshipsFactory;

ScholarshipsFactory.$inject = ['$localStorage', '$http'];

function ScholarshipsFactory($localStorage, $http) {

    class ScholarshipsFactory {

        static async get() {
            return $http.get(url);
        }
    }

    return ScholarshipsFactory;
}