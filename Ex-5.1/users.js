const uuid = require('uniqid');
const fs = require('fs');
const addUser = function (name, email) {
    const id = uuid();
    const users = loadUsers();
    const duplicateUsers = users.find((user) => {
        return user.id === id;
    });
    if (!duplicateUsers.length) {
        users.push({
            id,
            name,
            email,
        });

        savedUsers(users);
    } else {
        console.log('This user already exists');
    }
};

const savedUsers = function (users) {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON);
};
const loadUsers = function () {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};
const removeUser = function (id) {
    const users = loadUsers();
    const newUsers = users.filter((user) => {
        return user.id !== id;
    });
    savedUsers(newUsers);
};
const updateUser = function (name, email, newName, newEmail) {
    const users = loadUsers();
    const toUpdateUser = users.map((user, index) => {
        if (user.name === name) {
            id = user.id;
            user.name = newName;
            user.email = newEmail;
            return { id, newName, newEmail };
        } else {
            return user;
        }
    });
    savedUsers(toUpdateUser);
};
const getUsers = function () {
    const users = loadUsers();
    users.forEach((user) => {
        console.log(user.name, user.email);
    });
    users[0].name = 'hi';
    savedUsers(users);
};

module.exports = { addUser, removeUser, updateUser, getUsers };
