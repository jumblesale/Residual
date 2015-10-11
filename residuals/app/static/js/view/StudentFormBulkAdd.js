define(['backbone', 'model/Student'],
function(Backbone, StudentModel) {
    return Backbone.View.extend({
        el: "#student-form-bulk-add",
        template: _.template($("#template-students-bulk-add").html()),

        initialize: function() {
            $el        = this.$el;
            collection = this.collection;
            $el.on('submit', function(e) {
            var $studentInput = $('#students-bulk-add-input');

                e.preventDefault();

                students = $studentInput.val().split("\n");
                $studentInput.val("");

                _(students).each(function(name) {
                    this.collection.add(new StudentModel({name: name}));
                });
            });

            this.render();
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
});
