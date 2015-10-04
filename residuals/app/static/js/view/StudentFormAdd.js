define(['backbone', 'model/Student/Factory'],
function(Backbone, StudentModelFactory) {
    return Backbone.View.extend({
        el: "#student-form-add",
        template: _.template($("#template-student-form-add").html()),

        initialize: function() {
            $el        = this.$el;
            collection = this.collection;
            $el.on('submit', function(e) {
                e.preventDefault();
                params = {}
                _
                    .chain($el.find('form').serializeArray())
                    .map(function(item) {params[item.name] = item.value;});

                model = StudentModelFactory.createFromArray(params);

                console.log(model);

                collection.add(model);
            });
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
});