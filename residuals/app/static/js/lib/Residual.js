define(function residual() {
    "use strict";

    var gradeMap = {
        'a*': 1,
        'a':  2,
        'b':  3,
        'c':  4,
        'd':  5,
        'e':  6,

        'u':  7
    };

    return {
        calculateResidual: function(potential, actual) {
            var difference = gradeMap[potential.toLowerCase()] - gradeMap[actual.toLowerCase()];

            return difference;
        }
    };
});
