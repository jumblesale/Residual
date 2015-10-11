define([
    'underscore',
    'backbone',
    'model/Student',
    'average'
], function(_, Backbone, StudentModel, Average) {
    return StudentCollection = Backbone.Collection.extend({
        model: StudentModel,

        export: function() {
            console.log(JSON.stringify(this.toJSON()));
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
