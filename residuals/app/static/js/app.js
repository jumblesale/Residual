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
            var collection = new StudentCollection(),
                statsView = new StudentStatsView({collection: collection}),
                view = new StudentListView({collection: collection}),
                form = new StudentFormAdd({collection: collection});

            form.render();

            statsView.render();
        }
    }
});
