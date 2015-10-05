define(['backbone', 'view/StudentItem'],
function(Backbone, StudentItemView) {
    return Backbone.View.extend({
        el: "#students-table-body",

        initialize: function() {
            this.listenTo(this.collection, "add remove", this.render);
        },

        renderItem: function(model) {
            var itemView = new StudentItemView({model: model, collection: this.collection});
            itemView.render();
            this.$el.append(itemView.el);
        },

        render: function() {
            this.$el.empty();
            this.collection.each(this.renderItem, this);
        }
    });
});
