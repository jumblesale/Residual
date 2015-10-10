define(['backbone', 'view/DeleteStudent'],
function(Backbone, DeleteStudentView) {
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
            var cid = this.model.cid,
                deleteButton = new DeleteStudentView({
                    model:      this.model,
                    collection: this.collection
                }).$el;

            this.$el.html(
                this.template(
                    _.extend(
                        this.model.attributes,
                        {
                            cid: cid,
                            residualCellClass: function(residual) {
                                if(residual < 0) {return 'danger';}
                                if(residual > 0) {return 'success';}
                                return 'warning';
                            }(this.model.get('residual'))
                        }
                    )
                )
            );

            this.$el.hide();
            this.$el.fadeIn('slow')

            this.$el.find('.student-row-delete-td').html(deleteButton);

            return this;
        }
    });
});
