define(['model/Student'],
function(StudentModel) {
    return {
        createFromArray: function(params) {
            return new StudentModel({
                name:      params.name,
                potential: params.potential,
                actual:    params.actual
            });
        }
    };
});
