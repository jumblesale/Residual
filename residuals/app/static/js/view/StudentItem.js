define(['backbone'],
function(Backbone) {
    return Backbone.View.extend({
        tagName: "tr",
        template: _.template($("#template-student-row").html()),

        events: {
            "click": "clicked"
        },

        clicked: function(e) {
            console.log(e);
        },

        render: function() {
            this.$el.html(
                this.template(
                    _.extend(
                        this.model.attributes,
                        {cid: this.model.cid}
                    )
                )
            );
        }
    });
});
