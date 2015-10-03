define([
    'jquery',
    'underscore',
    'backbone',
    'average',
    'model/Student',
    'collection/Student',
], function($, _, Backbone, Average, StudentModel, StudentCollection) {
    return {
        init: function() {
            var student1 = new StudentModel({
                id:        1,
                potential: 'a',
                actual:    'b'
            }),
            student2 = new StudentModel({
                id:        2,
                potential: 'c',
                actual:    'd'
            }),
            collection = new StudentCollection([student1, student2]);

            console.log(collection.toJSON());

            console.log(Average.averageResidual(collection));
        }
    }
});
