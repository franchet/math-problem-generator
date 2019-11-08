/* This file defines functions for problem generators.

A problem generator is a function with the following signature: () -> MathProblem

That is, a function that takes no parameters and which returns a MathProblem object defining a problem in terms the problem 
statement and the correct and incorrect solutions to the problem. */

const dataTypes = require('./dataTypes');

function simpleAdditionProblem() {
    //Generate and return a simple addition MathProblem;
    var left = Math.floor(Math.random() * 100);
    var right = Math.floor(Math.random() * 100);

    return MathProblem(
        question = `What is ${left} + ${right}?`, rightAnswer = (left + right), wrongAnswer1 = left + right + 1,
        wrongAnswer2 = left * right, wrongAnswer3 = left + right + 10);
}

function quotientWithSymbolProblem() {
    // Generate and return a quotient with placeholder MathProblem
    const result = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    const hidden = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    var left = result * hidden;


    return MathProblem(
        question = `${left} \u00F7 \u2666 = ${result}"\ "\n\n"\ "The number that should replace the symbol \u2666 is`,
        rightAnswer = hidden,
        wrongAnswer_1 = hidden - 10 + 5,
        wrongAnswer_2 = hidden + 10,
        wrongAnswer_3 = parseInt(result * left / 10)
    );
}

function equationProblem() {
    //Generate an equation with 2 to 6 terms, with one term replaced with X
    const maxTerms = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
    const eq = randomEquation(maxTerms);


    return MathProblem(
        question = `"Find the value for X if ${eq.expression}`,
        rightAnswer = eq.answer,
        wrongAnswer1 = eq.answer + 10,
        wrongAnswer2 = eq.answer - 10,
        wrongAnswer3 = eq.answer + 3
    );
}



function randomEquation(maxTerms) {
    /* Generate a random math equation with at least one variable term called X 
    with a single term on the right - hand side and max_terms number of terms
    on the left - hand side.The variable term X will be on the left - hand side.

    The answer on the right - hand side will always be in the range[0, 1000].
    Parameters - max_terms: how many terms to generate on the left - hand - side of the equation. */

    while (True) {
        const eq = generateEquation(maxTerms);
        if (eq.answer == parseInt(eq.answer) && eq.answer >= 0 && eq.answer <= 1000) {
            break;
            return eq;
        }
    }
}

function generateEquation(maxTerms) {
    const OPS = ("+", "-", "/", "*");
    const expr = "";
    const missingTermPos = Math.floor(Math.random() * maxTerms);
    const missingTerm = None;

    for (i = 0; i < maxTerms.length; i++) {
        const term = Math.floor(Math.random() * 100);
        const op = random.choice(OPS);
    }

    if (i === MissingTermPos) {
        const expr = expr + "X";
        const missingTerm = term;
    } else {
        const expr = expr + str(term);
    }

    if (i < maxTerms - 1) {
        const expr = expr + " " + op + " ";

        const answer = eval(expr, None, { "X": missing_term });
        const equation = prettify(expr) + " = " + str(parseInt(answer));

        return Equation(equation, answer, missingTerm);
    }
}

function prettify(expr) {
    // Replace * and / with their corresponding mathematical symbols"
    return expr.replace(" * ", " \u00d7 ").replace(" / ", " \u00f7 ");
}