import problems
import formatters
import random
import sys

def main():
  """Generates a multiple-choice test using a set of problem generators."""
  generators = [
    problems.simple_addition_problem, 
    problems.quotient_with_symbol_problem,
    problems.equation_problem
  ]

  generate_test(generators, formatters.multiple_choice, 25)

def generate_test(generators, formatter, question_count):
  """Generates a test with question_count problems using 
  the provided generators to generate the problems, and the
  provided formatter to format and displsay them."""
  problems = []
  for i in range(question_count):
    fn = random.choice(generators)
    problems = problems + [fn()]
  
  for i, problem in enumerate(problems):
    formatter(sys.stdout, i + 1, problem)

if __name__ == "__main__":
    main()