const yargs = require('yargs');
const users = require('./users');

yargs.command({
    command: 'add',
    describe: 'adds a user',
    builder: {
        id: { describe: 'user id', type: 'string' },
        name: { describe: 'user name', demandOption: true, type: 'string' },
        email: { describe: 'user mail', demandOption: true, type: 'string' },
        password: { describe: 'user password', type: 'string' },
    },
    handler: function (argv) {
        users.addUser(argv.name, argv.email);
    },
});
yargs.command({
    command: 'remove',
    describe: 'removes user',
    builder: {
        id: { describe: 'user id', demandOption: true, type: 'string' },
    },
    handler: function (argv) {
        users.removeUser(argv.id);
    },
});
yargs.command({
    command: 'update',
    describe: 'update a user',
    builder: {
        id: { describe: 'user id', type: 'number' },
        name: { describe: 'user name', demandOption: true, type: 'string' },
        email: { describe: 'user mail', demandOption: true, type: 'string' },
        newName: { describe: 'user name', demandOption: true, type: 'string' },
        newEmail: { describe: 'user mail', demandOption: true, type: 'string' },
    },
    handler: function (argv) {
        users.updateUser(argv.name, argv.email, argv.newName, argv.newEmail);
    },
});
yargs.command({
    command: 'read',
    describe: 'read the users',
    handler: function () {
        users.getUsers();
    },
});
yargs.parse();
