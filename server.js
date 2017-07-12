const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, function () {
    console.log('listening on port ' + PORT);
});