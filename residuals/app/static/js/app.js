(function($) {
    var StudentModel = Backbone.Model.extend({
        defaults: {
            "id": null,
            "name": "",
            "grade": ""
        }
    });

    var StudentCollection = Backbone.Collection.extend({
        model: StudentModel
    });

    var students = new StudentCollection([
        new StudentModel(1, "bob", "C"),
        new StudentModel(1, "jerry", "A"),
    ]);

    console.log(students);
})(jQuery);
