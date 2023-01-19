var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var data = [];

app.post('/webhook', async function (req, res) {
    console.log(req.body);
    data.push(req.body);
    res.send({ ack: "true", currentTime: new Date().toISOString() });
});

app.get('/webhook/check', async function (req, res) {
    res.send(data);
});

app.post('/webhook2', async function (req, res) {
    console.log(req.body);
    res.send({ ack: "true", currentTime: new Date(date).getTime().toString() });
});

function getTime(date) {
    return new Date(date).getTime().toString();
}

var server = app.listen(3000, function () { });
console.log('Server is Started !!!')
