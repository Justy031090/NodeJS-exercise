const express = require('express');
const app = express();
const PORT = 3000;

let numbers = [1, 3, 5, 7, 9, 11];

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/numbers/', (req, res) => {
    res.status(200).send(numbers);
});
app.put('/numbers/:id', (req, res) => {
    if (numbers.includes(parseInt(req.params.id))) {
        numbers.splice(
            numbers.indexOf(parseInt(req.params.id)),
            1,
            req.body.number
        );
        res.status(200).send(numbers);
    } else {
        res.status(400).send('Check your params, this Number does not exist');
    }
});
app.post('/numbers/', (req, res) => {
    if (!numbers.includes(req.body.number)) {
        numbers.push(req.body.number);
        res.status(200).send(numbers);
    } else {
        res.status(400).send('Number already exists');
    }
});
app.delete('/numbers/:id/', (req, res) => {
    if (numbers.includes(parseInt(req.params.id))) {
        numbers.splice(numbers.indexOf(parseInt(req.params.id)), 1);
        res.status(200).send(numbers);
    } else {
        res.status(400).send('Check your params, this Number does not exist');
    }
});

app.listen(PORT, () => {
    console.log('Server up !');
});
