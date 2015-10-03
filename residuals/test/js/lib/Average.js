"use strict";

var assert    = require("assert"),
    requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    baseUrl:     'residuals/app/static/js',
    paths: {
        average:    'lib/Average',
        underscore: 'vendor/underscore'
    }
});

describe('it calculates averages', function() {
    var Average,
        students = [
            {residual: 2},
            {residual: 4},
            {residual: 8},
            {residual: 16},
        ];

    before(function(done) {
        requirejs(['average'], function(average) {
            Average = average;
            done();
        });
    });

    it('calculates the residual average', function() {
        assert.equal(Average.averageResidual(students), 7.5);
    });
});
