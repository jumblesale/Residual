define(['backbone'],
function(Backbone) {
    return Backbone.View.extend({
        tagName: "tr",
        template: _.template($("#student-row-template").html()),

        events: {
            "click": "clicked"
        },

        clicked: function(e) {
            console.log(e);
        },

        render: function() {
            this.$el.html(
                this.template(this.model.attributes)
            );
        }
    });
});