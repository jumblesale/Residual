define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        template: _.template($("#template-export").html()),
        el: "#students-export-container",

        initialize: function() {
            this.render();
        },

        events: {
            "click": "clicked"
        },

        clicked: function(e) {
            var data = this.collection.export();

            $('#students-export-data').val(JSON.stringify(data));

            $('#students-export').submit();
        },

        render: function() {
            this.$el.html(this.template());

            return this;
        }
    });
});
