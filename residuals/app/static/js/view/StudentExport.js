define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        template: _.template($("#template-export").html()),
        el: "#student-export-button",

        initialize: function() {
            this.render();
        },

        events: {
            "click": "clicked"
        },

        clicked: function(e) {
            this.collection.export();
        },

        render: function() {
            this.$el.html(this.template());

            return this;
        }
    });
});
