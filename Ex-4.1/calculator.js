const yargs = require('yargs');

// Create the following operations: (add, substract, multiply, pow).
yargs.command({
    command: 'add',
    describe: 'Sum two numbers',
    builder: {
        numOne: {
            type: 'number',
        },
        numTwo: {
            type: 'number',
        },
    },
    handler: function (argv) {
        return console.log(argv.numOne + argv.numTwo);
    },
});
yargs.command({
    command: 'sub',
    describe: 'substract two numbers',
    builder: {
        numOne: {
            type: 'number',
        },
        numTwo: {
            type: 'number',
        },
    },
    handler: function (argv) {
        return console.log(argv.numOne - argv.numTwo);
    },
});
yargs.command({
    command: 'multiply',
    describe: 'multiply two numbers',
    builder: {
        numOne: {
            type: 'number',
        },
        numTwo: {
            type: 'number',
        },
    },
    handler: function (argv) {
        return console.log(argv.numOne * argv.numTwo);
    },
});
yargs.command({
    command: 'pow',
    describe: 'X^y',
    builder: {
        numOne: {
            type: 'number',
        },
        numTwo: {
            type: 'number',
        },
    },
    handler: function (argv) {
        return console.log(Math.pow(argv.numOne, argv.numTwo));
    },
});
yargs.parse();
