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
            {residual: 2, attributes: {residual: 2, criteria: true}},
            {residual: 4, attributes: {}},
            {residual: 8, attributes: {residual: 8, criteria: true}},
            {residual: 16, attributes: {}},
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

    it('calculates the residual average on students with a criteria', function() {
        assert.equal(Average.averageResidualByCriteria(_.chain(students), 'criteria'), 5);
    });
});
