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
            var student1 = new StudentModel({
                name:      'bob loblaw',
                potential: 'a',
                actual:    'b',
                pp:        true,
                gt:        false,
                sen:       true,
                bme:       false
            }),
            student2 = new StudentModel({
                name:      'michael',
                potential: 'c',
                actual:    'd',
                pp:        true,
                gt:        false,
                sen:       false,
                bme:       false,
                fsm:       true
            }),
            student3 = new StudentModel({
                name:      'gob',
                potential: 'a',
                actual:    'a',
                pp:        true,
                gt:        false,
                sen:       true,
                bme:       true
            }),
            collection = new StudentCollection([student1, student2, student3]);

            var view = new StudentListView({collection: collection});

            var form = new StudentFormAdd({collection: collection});

            form.render();

            statsView = new StudentStatsView({collection: collection});

            statsView.render();

            collection.add(new StudentModel({
                name:      'loose seal',
                potential: 'e',
                actual:    'c',
                pp:        false,
                gt:        true,
                sen:       true,
                bme:       true
            }));
        }
    }
});
