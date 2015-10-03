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
        _,
        students = [
            {residual: 2},
            {residual: 4},
            {residual: 8},
            {residual: 16},
        ];

    before(function(done) {
        requirejs(['underscore', 'average'], function(underscore, average) {
            Average = average;
            _       = underscore;
            done();
        });
    });

    it('calculates the residual average', function() {
        assert.equal(Average.averageResidual(_.chain(students)), 7.5);
    });
});
