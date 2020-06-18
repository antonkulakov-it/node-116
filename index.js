const express = require('express');
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: true }));

const dataHash = {};

app.get('/data/:id', function(req, res, next) {
    const id = req.params.id;
    res.json(dataHash[id] || {});
});

app.post('/data/:id', function(req, res, next) {
    const id = req.params.id;
    if (!dataHash[id]) {
        dataHash[id] = [];
    }
    dataHash[id].push(req.body);
    console.log(dataHash)
    res.json(dataHash[id]);
});

app.listen(port, function() { 
    console.log(`we are listening on: ${port}`) 
});