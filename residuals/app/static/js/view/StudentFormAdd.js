define(['backbone', 'model/Student/Factory'],
function(Backbone, StudentModelFactory) {
    return Backbone.View.extend({
        el: "#student-form-add",
        template: _.template($("#template-student-form-add").html()),

        initialize: function() {
            $el = this.$el;
            $el.on('submit', function(e) {
                params = {}
                _
                    .chain($el.find('form').serializeArray())
                    .map(function(item) {params[item.name] = item.value;});

                 console.log(StudentModelFactory.createFromArray(params));

                return false;
            });
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
});
