define([
    'underscore',
    'backbone',
    'model/Student',
    'average'
], function(_, Backbone, StudentModel, Average) {
    return StudentCollection = Backbone.Collection.extend({
        model: StudentModel,

        getAverageResidual: function() {
            return Average.averageResidual(this);
        },

        getAveragePupilPremiumResidual: function() {
            return Average.averageResidualByCriteria(_.chain(this.models), 'pp');
        }
    });
});
