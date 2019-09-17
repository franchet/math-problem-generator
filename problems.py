"""
This file defines functions for problem generators.

A problem generator is a function with the following signature:

  () -> MathProblem

That is, a function that takes no parameters and which returns
a MathProblem object defining a problem in terms the problem
statement and the correct and incorrect solutions to the problem.
"""

import random
from data_types import MathProblem, Equation

def simple_addition_problem():
  """Generate and return a simple addition MathProblem"""
  left = random.randint(0, 100)
  right = random.randint(0, 100)
  return MathProblem(
    question = f"What is {left} + {right}?",
    right_answer = (left + right),
    wrong_answer_1 = left + right + 1,
    wrong_answer_2 = left * right,
    wrong_answer_3 = left + right + 10
  )

def quotient_with_symbol_problem():
  """Generate and return a quotient with placeholder MathProblem"""
  result = random.randint(2, 10)
  hidden = random.randint(10, 50)
  left = result * hidden

  return MathProblem(
    question = \
      f"{left} \u00F7 \u2666 = {result}" \
      "\n\n" \
      "The number that should replace the symbol \u2666 is",
    right_answer = hidden,
    wrong_answer_1 = hidden - 10 + 5,
    wrong_answer_2 = hidden + 10,
    wrong_answer_3 = int(result * left / 10)
  )

def equation_problem():
  """Generate an equation with 2 to 6 terms, with one term replaced with X"""
  max_terms = random.randint(2, 6)
  eq = random_equation(max_terms)

  return MathProblem(
    question = f"Find the value for X if {eq.expression}",
    right_answer = eq.answer,
    wrong_answer_1 = eq.answer + 10,
    wrong_answer_2 = eq.answer - 10,
    wrong_answer_3 = eq.answer + 3
  )

def random_equation(max_terms):
  """Generate a random math equation with at least one variable term called X
    with a single term on the right-hand side and max_terms number of terms 
    on the left-hand side. The variable term X will be on the left-hand side.
    
    The answer on the right-hand side will always be in the range [0, 1000].

    Parameters

    - max_terms: how many terms to generate on the left-hand-side of the equation.
  """
  while True:
    eq = generate_equation(max_terms)
    if eq.answer == int(eq.answer) and eq.answer >= 0 and eq.answer <= 1000:
      break
  return eq

def generate_equation(max_terms):
  OPS = ("+", "-", "/", "*")
  expr = ""
  missing_term_pos = random.randrange(0, max_terms)
  missing_term = None

  for i in range(max_terms):
    term = random.randint(1, 100)
    op = random.choice(OPS)

    if i == missing_term_pos:
      expr = expr + "X"
      missing_term = term
    else:
      expr = expr + str(term)

    if i < max_terms - 1:
        expr = expr + " " + op + " "
  
  answer = eval(expr, None, { "X": missing_term })
  equation = prettify(expr) + " = " + str(int(answer))

  return Equation(equation, answer, missing_term)

def prettify(expr):
  """Replace * and / with their corresponding mathematical symbols"""
  return expr.replace(" * ", " \u00d7 ").replace(" / ", " \u00f7 ")
