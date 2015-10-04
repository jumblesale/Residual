define([
    'underscore',
    'backbone',
    'residual'
], function(_, Backbone, Residual) {
    var StudentModel = Backbone.Model.extend({
        defaults: {
            name:      '',
            potential: '',
            actual:    '',
            pp:        false,
            gt:        false,
            sen:       false,
            bme:       false,
            fsm:       false,
            residual:  0
        },

        initialize: function() {
            var potential = this.attributes.potential,
                actual    = this.attributes.actual;

            this.attributes.residual  = Residual.calculateResidual(
                potential, actual
            );
        }
    });

    return StudentModel;
});
