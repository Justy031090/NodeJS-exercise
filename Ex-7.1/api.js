const request = require('request');
const axios = require('axios');
const posmtman = require('postman-request');

const url = 'https://cat-fact.herokuapp.com/facts';
const getAxios = async () => {
    try {
        const response = await axios.get(url);
        const data = response.data;
    } catch (e) {
        console.log(e.message);
    }
};
request({ url, json: true }, (error, response) => {
    error && console.log(error);
    let data = response.body;
    console.log(data);
});

posmtman(url, (error, response, body) => {
    error && console.log(error);
    let data = JSON.parse(body);
    console.log(data);
});
