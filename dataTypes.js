// This file defines the data types used by the rest of the program.

class MathProblems {
    //Represents a math problem (question and right and wrong answers)
    constructor(question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
        this.question = question;
        this.rightAnswer = rightAnswer;
        this.wrongAnswer1 = wrongAnswer1;
        this.wrongAnswer2 = wrongAnswer2;
        this.wrongAnswer3 = wrongAnswer3;
    }

};


class Equation {
    //Represents an equation with at least one variable
    constructor(expression, answer, missingTerm) {
        this.expression = expression;
        this.answer = answer;
        this.missingTerm = missingTerm;
    }

};