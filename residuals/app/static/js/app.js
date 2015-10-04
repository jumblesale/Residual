define([
    'underscore',
    'backbone',
    'average',
    'model/Student',
    'collection/Student',
    'view/StudentRow',
], function(_, Backbone, Average, StudentModel, StudentCollection, StudentRowView) {
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

            var StudentItemView = Backbone.View.extend({
                tagName: "li",

                events: {
                    "click": "clicked"
                },

                clicked: function(e) {
                    console.log(e);
                },

                render: function() {
                    this.$el.append(
                        _.template(
                            '<%- potential %>'
                        )(this.model.attributes)
                    );
                }
            });

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
        }
    }
});
