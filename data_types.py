"""
This file defines the data types used by the rest of the program.
"""

class MathProblem:
  """Represents a math problem (question and right and wrong answers)"""
  question = None
  right_answer = None
  wrong_answer_1 = None
  wrong_answer_2 = None
  wrong_answer_3 = None

  def __init__(self, question, right_answer, wrong_answer_1, wrong_answer_2, wrong_answer_3):
    self.question = question
    self.right_answer = right_answer
    self.wrong_answer_1 = wrong_answer_1
    self.wrong_answer_2 = wrong_answer_2
    self.wrong_answer_3 = wrong_answer_3

class Equation:
  """Represents an equation with at least one variable"""
  expression = None
  answer = None
  missing_term = None
  
  def __init__(self, expression, answer, missing_term):
    self.expression = expression
    self.answer = answer
    self.missing_term = missing_term