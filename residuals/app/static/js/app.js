define([
    'underscore',
    'backbone',
    'average',
    'model/Student',
    'collection/Student',
    'view/StudentItem',
], function(_, Backbone, Average, StudentModel, StudentCollection, StudentItemView) {
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
            collection = new StudentCollection([student1, student2]);

            console.log(collection.toJSON());

            var StudentListView = Backbone.View.extend({
                el: "#students",

                renderItem: function(model){
                    var itemView = new StudentItemView({model: model});
                    itemView.render();
                    this.$el.append(itemView.el);
                },

                render: function(){
                    this.collection.each(this.renderItem, this);
                }
            });

            var view = new StudentListView({collection: collection});
            view.render();

            collection.add(new StudentModel({
                id:        4,
                name:      'pop pop',
                potential: 'e',
                actual:    'c'
            }));

            view.render();
        }
    }
});
