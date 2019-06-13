'use strict';

var mongoose = require('mongoose');

var schema = mongoose.schema;

var msgShema = new schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Messages', msgShema);