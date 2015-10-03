define([
    'underscore',
    'backbone',
    'model/Student'
], function(_, Backbone, StudentModel) {
    var StudentCollection = Backbone.Collection.extend({
        model: StudentModel
    });

    return StudentCollection;
});
