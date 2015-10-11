define([
    'underscore',
    'backbone',
    'collection/Student',
    'view/StudentList',
    'view/StudentFormAdd',
    'view/StudentStats',
    'view/StudentExport',
], function(_, Backbone, StudentCollection, StudentListView, StudentFormAdd, StudentStatsView, StudentExportView) {
    return {
        init: function() {
            var collection = new StudentCollection(),
                statsView  = new StudentStatsView({collection: collection}),
                tableView  = new StudentListView({collection: collection}),
                formView   = new StudentFormAdd({collection: collection}),
                exportView = new StudentExportView({collection: collection});

            formView.render();

            statsView.render();
        }
    }
});
