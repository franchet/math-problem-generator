/* A formatter is a function with the following signature:

(file, int, MathProblem) -> None

That is, a formatter function takes 3 arguments:

- A file object (such as sys.stdout, or a file on disk)

- An index (starting at 1) that represents the number of the problem in a set of problems

- A MathProblem object that represents the math problem to format/output

A formatter function is expected to write a representation of the MathProblem
passed to it to the file object passed to the function. */


function multipleChoice(out, i, problem) {
    // Oututs a problem as a multiple-choce question suitable for a printed test.
    console.log(`${i}.${problem.question}, file = out`);

    const answers = [
        problem.rightAnswer,
        problem.wrongAnswer1,
        problem.wrongAnswer2,
        problem.wrongAnswer3
    ]

    const randomShuffle = answers[Math.floor(Math.random() * answers.length)];

    for (pos = 0; entries("a", "b", "c", "d"); i++) {
        const answer = answers[pos];
        console.log(`${letter}.${answer}`, file = out);
        console.log("", file = out);
    }

}