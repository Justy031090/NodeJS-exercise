const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/numbers/', (req, res) => {
    res.send('Successfull Get');
});
app.put('/numbers/:id', (req, res) => {
    console.log(req.params);
    res.send('Successfull Put');
});
app.post('/numbers/', (req, res) => {
    console.log(req.params);
    res.send('Successfull Posting');
});
app.delete('/numbers/:id/', (req, res) => {
    console.log(req.params);
    res.send('Successfull Deleting');
});

app.listen(PORT, () => {
    console.log('Server up !');
});
