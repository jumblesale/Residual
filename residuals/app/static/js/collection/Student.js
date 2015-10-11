define([
    'underscore',
    'backbone',
    'model/Student',
    'average'
], function(_, Backbone, StudentModel, Average) {
    return StudentCollection = Backbone.Collection.extend({
        model: StudentModel,

        initialize: function() {
            this.averages = {};
            this.update();
            this.listenTo(this, 'add remove change', this.update)
        },

        export: function() {
            return {
                students: this.toJSON(),
                averages: this.averages
            };
        },

        update: function() {
            var fields = ['pp', 'gt', 'sen', 'bme', 'fsm', ];

            _(fields).each(function(field) {
                this.averages[field] = this.getAverageResidualByCriteria(field);
            }, this);

            this.averages.residual = Average.averageResidual(this).toPrecision(3);

            return this.averages;
        },

        getAverageResidual: function() {
            return Average.averageResidual(this).toPrecision(3);
        },

        getAverageResidualByCriteria: function(criteria) {
            return Average.averageResidualByCriteria(_.chain(this.models), criteria).toPrecision(3);
        },

        getAveragePupilPremiumResidual: function() {
            return this.getAverageResidualByCriteria('pp');
        },

        getAverageGiftedTalentedResidual: function() {
            return this.getAverageResidualByCriteria('gt');
        },

        getAverageSENResidual: function() {
            return this.getAverageResidualByCriteria('sen');
        },

        getAverageBMEResidual: function() {
            return this.getAverageResidualByCriteria('bme');
        },

        getAverageFSMResidual: function() {
            return this.getAverageResidualByCriteria('fsm');
        }
    }, {
        exportUrl: "students/export"
    });
});
