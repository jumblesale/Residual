define([
    'underscore',
    'backbone',
    'average',
    'model/Student',
    'collection/Student',
    'view/StudentList',
    'view/StudentFormAdd',
    'view/StudentStats',
], function(_, Backbone, Average, StudentModel, StudentCollection, StudentListView, StudentFormAdd, StudentStatsView) {
    return {
        init: function() {
            collection = new StudentCollection([student1, student2, student3]);

            var view = new StudentListView({collection: collection});

            var form = new StudentFormAdd({collection: collection});

            form.render();

            statsView = new StudentStatsView({collection: collection});

            statsView.render();
        }
    }
});
