const fs = require('fs');
fs.writeFileSync('new.txt', 'this is the first file created with NodeJS.');
fs.copyFileSync('new.txt', 'anotherfile.txt');
fs.renameSync('anotherfile.txt', 'copied_file.txt');
fs.readdirSync('../Ex-2.1').forEach((file) => {
    console.log(file);
});
fs.appendFileSync('new.txt', ' This is a sentece from 5 :)');

// 5. Find out and implement another method for the fs module
