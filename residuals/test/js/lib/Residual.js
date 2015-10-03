"use strict";

var assert    = require("assert"),
    requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    baseUrl:     'residuals/app/static/js',
    paths: {
        residual: 'lib/Residual'
    }
});

describe('it calculates residuals', function() {
    var Residual;

    before(function(done) {
        requirejs(['residual'], function(residual) {
            Residual = residual;
            done();
        });
    });

    it('calculates the difference between C and A', function() {
        assert.equal(Residual.calculateResidual('c', 'a'), 2);
    });

    it('gives 0 if the potential is the actual', function() {
        assert.equal(Residual.calculateResidual('b', 'b'), 0);
    });

    it('calculates a negative Residual between b and e', function() {
        assert.equal(Residual.calculateResidual('b', 'e'), -3);
    });

    it('allows mixed cases', function() {
        assert.equal(Residual.calculateResidual('a', 'B'), -1);
    });
});
