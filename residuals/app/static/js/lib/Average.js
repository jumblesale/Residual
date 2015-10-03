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

    };

    return {
        averageResidual: averageResidual
    };
});
