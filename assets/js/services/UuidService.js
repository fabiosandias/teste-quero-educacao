'use strict';

import {forEach} from "@uirouter/core";

const angular = require('angular');

export default class UuidService {


    constructor() {
        'ngInject';

    }

    generateUUID(){
        let dataNow = new Date().getTime();
        const model = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        return model.replace(/[xy]/g, (c) => {
            let randomDate = (dataNow + Math.random() * 16) % 16 | 0;
            dataNow = Math.floor(dataNow / 16);
            return (c === 'x' ? randomDate :(randomDate & 0x3 | 0x8)).toString(16);
        });
    }


}