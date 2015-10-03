define([
    'underscore',
    'backbone',
    'residual'
], function(_, Backbone, Residual) {
    var StudentModel = Backbone.Model.extend({
        defaults: {
            id: null,
            potential: '',
            actual:    '',
            residual:  0
        },

        initialize: function(options) {
            var potential = options.potential,
                actual    = options.actual;

            this.attributes.residual  = Residual.calculateResidual(
                potential, actual
            );
        }
    });

    return StudentModel;
});
