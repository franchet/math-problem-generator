const problems = require("./problems");
const formatters = require("./formatters");


function main() {
    //Generates a multipleChoice test using a set of problem generators.
    const generators = [
        problems.simpleAdditionProblem,
        problems.quotientWithSymbolProblem,
        problems.equationProblem
    ];

    generateTest(generators, formatters.multipleChoice, 25);

    function generateTest(generators, formatter, questionCount) {
        /*Generates a test with questionCount problems using the provided generators to generate the problems, 
        and the provided formatter to format and displsay them. */

        const problems = [];
        for (i = 0; i < questionCount.length; i++) {
            const fn = random[Math.floor(Math.random() * answers.length)];
            problems.push([fn()]);
        }

        for (i = 0; i < problems.length; i++) {
            formatter(sys.stdout, i + 1, problem);
        }

        /* if __name__ == "__main__":
            main()
            */

    }

}