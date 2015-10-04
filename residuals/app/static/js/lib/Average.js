define([
    'underscore',
], function Average(_) {
    "use strict";

    var averageResidual = function averageResidual(students) {
        return students
            .pluck('residual')
            .reduce(function(memo, residual) {
                return memo + residual;
            }, 0) / students.size();
    },

    averageResidualByCriteria = function averageByCriteria(students, field) {
        var total,
            eligible = students
                .filter(function(student) {return true === student.attributes[field]});

        total = eligible
            .map(function(student) {return student.attributes.residual})
            .reduce(function(memo, residual) {
                return memo + residual;
            }).value();

        return 0 === eligible.size ?
            0 : (total / eligible.size());
    }

    return {
        averageResidual: averageResidual,
        averageResidualByCriteria: averageResidualByCriteria
    };
});
