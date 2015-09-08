class CalculateResidual:

    gradeMap = {
        'a*': 0,
        'a':  1,
        'b':  2,
        'c':  3,
        'd':  4,
        'e':  5,
    }

    def __init__(self):
        return

    def calculate_grade_difference(self, grade1, grade2):
        grade1value = self.gradeMap[grade1]
        grade2value = self.gradeMap[grade2]

        return grade1value - grade2value
