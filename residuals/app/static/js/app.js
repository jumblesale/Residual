define([
    'underscore',
    'backbone',
    'average',
    'model/Student',
    'collection/Student',
    'view/StudentList',
    'view/StudentFormAdd',
], function(_, Backbone, Average, StudentModel, StudentCollection, StudentListView, StudentFormAdd) {
    return {
        init: function() {
            var student1 = new StudentModel({
                id:        1,
                name:      'charles',
                potential: 'a',
                actual:    'b'
            }),
            student2 = new StudentModel({
                id:        2,
                name:      'michael',
                potential: 'c',
                actual:    'd'
            }),
            student3 = new StudentModel({
                id:        3,
                name:      'gob',
                potential: 'a*',
                actual:    'a'
            }),
            collection = new StudentCollection([student1, student2, student3]);

            console.log(collection.toJSON());

            var view = new StudentListView({collection: collection});

            collection.add(new StudentModel({
                id:        4,
                name:      'pop pop',
                potential: 'e',
                actual:    'c'
            }));

            var form = new StudentFormAdd({collection: collection});

            form.render();

            view.$el.after(form.$el.html());
        }
    }
});
