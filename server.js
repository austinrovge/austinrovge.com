const path = require('path');
const express = require('express');
const app = express();

let PORT;

if (process.env.NODE_ENV === 'prod') {
    PORT = 80;
} else if (process.env.NODE_ENV === 'dev') {
    PORT = 8080;
}

app.use(express.static(path.join(__dirname, 'src')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(PORT, function () {
    console.log('Server listening on port: ' + PORT);
});