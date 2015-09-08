from unittest import TestCase

from Residual.CalculateResidual import CalculateResidual


class TestCalculateResidual(TestCase):
    cr = CalculateResidual()

    def it_calculates_negative_grade_differences(self):
        self.assertEqual(
            self.cr.calculate_grade_difference('a*', 'b'), -2
        )

    def it_calculates_positive_grade_differences(self):
        self.assertEqual(
            self.cr.calculate_grade_difference('e', 'b'), 3
        )
