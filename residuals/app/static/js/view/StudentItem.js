define(['backbone', 'view/DeleteStudent'],
function(Backbone, DeleteStudentView) {
    return Backbone.View.extend({
        tagName: "tr",
        template: _.template($("#template-student-row").html()),
        gradeTemplate: _
            .template($("#student-grade-options").html()),

        render: function() {
            var cid = this.model.cid,
                deleteButton = new DeleteStudentView({
                    model:      this.model,
                    collection: this.collection
                }).$el,
                attributes = {};

            attributes.model = this.model.attributes;
            attributes.cid = cid;
            attributes.residualCellClass = function(residual) {
                if(residual < 0) {return 'danger';}
                if(residual > 0) {return 'success';}
                return 'warning';
            }(this.model.get('residual'));

            this.$el.html(this.template(attributes));

            this.$el.find('.potential-grade').html(this.gradeTemplate({
                attr:     'potential',
                grades:   this.model.constructor.potentialGrades,
                selected: this.model.attributes.potential
            }));

            this.$el.find('.actual-grade').html(this.gradeTemplate({
                attr:    'actual',
                grades:  this.model.constructor.actualGrades,
                selected: this.model.attributes.actual
            }));

            this.$el.find('select').on('change', $.proxy(this.inputChanged, this));
            this.$el.find('input').on('change', $.proxy(this.inputChanged, this));

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
            this.model.set(attr, value);
        }
    });
});
