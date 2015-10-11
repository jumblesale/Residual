define([
    'underscore',
    'backbone',
    'collection/Student',
    'view/StudentList',
    'view/StudentFormAdd',
    'view/StudentFormBulkAdd',
    'view/StudentStats',
    'view/StudentExport',
], function(_, Backbone,
    StudentCollection,
    StudentListView,
    StudentFormAdd,
    StudentFormBulkAdd,
    StudentStatsView,
    StudentExportView
) {
    return {
        init: function() {
            var collection      = new StudentCollection(),
                statsView       = new StudentStatsView({collection: collection}),
                tableView       = new StudentListView({collection: collection}),
             // addFormView     = new StudentFormAdd({collection: collection}),
                bulkAddFormView = new StudentFormBulkAdd({collection: collection}),
                exportView      = new StudentExportView({collection: collection});

            // addFormView.render();

            statsView.render();
        }
    }
});
