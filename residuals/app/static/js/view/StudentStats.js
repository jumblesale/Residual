define(['backbone', 'collection/Student'],
function(Backbone, StudentCollection) {
    return Backbone.View.extend({
        el:      '#student-stats',
        tagName: 'div',
        template: _.template($("#template-student-stats").html()),

        initialize: function() {
            this.listenTo(
                this.collection,
                "change reset add remove",
                this.onChange
            );
        },

        onChange: function(e) {
            this.render();
        },

        render: function() {
            collection = this.collection;

            this.$el.html(this.template({
                averageResidual: collection
                    .getAverageResidual()
                    .toPrecision(3),
                averagePupilPremiumResidual: collection
                    .getAveragePupilPremiumResidual()
                    .toPrecision(3)
            }));

            return this;
        }
    });
});
