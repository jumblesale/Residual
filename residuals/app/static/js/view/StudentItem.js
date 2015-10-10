define(['backbone', 'view/DeleteStudent'],
function(Backbone, DeleteStudentView) {
    return Backbone.View.extend({
        tagName: "tr",
        template: _.template($("#template-student-row").html()),

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

            this.$el.find('input').on('change', $.proxy(this.inputChanged, this));

            this.$el.hide();
            this.$el.fadeIn('slow');

            this.$el.find('.student-row-delete-td').html(deleteButton);

            return this;
        },

        inputChanged: function(e) {
            var target  = e.target,
                $target = $(e.target),
                type    = target.type,
                value   = $(target).val(),
                attr    = $(e.target).attr('data-student-attr');

            if('checkbox' === type) {
                value = target.checked;
            } else {
                value = $target.val();
            }

            this.updateModel(attr, value);
        },

        updateModel: function(attr, value) {
            console.log('updating ' + attr + ' to ' + value);
            this.model.set(attr, value);
        }
    });
});
