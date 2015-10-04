define(['model/Student'],
function(StudentModel) {
    return {
        createFromArray: function(params) {
            return new StudentModel(
                params.name,
                params.potential,
                params.actual
            );
        }
    };
});
