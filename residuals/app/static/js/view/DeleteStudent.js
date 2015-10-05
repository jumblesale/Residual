define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        template: _.template($("#template-student-delete").html()),

        initialize: function() {
            this.render();
        },

        events: {
            "click": "clicked"
        },

        clicked: function(e) {
            var cid = this.model.cid;
            this.collection.remove(cid)
            e.preventDefault();
            return false;
        },

        render: function() {
            this.$el.html(this.template({cid: this.model.cid}));

            return this;
        }
    });
});
