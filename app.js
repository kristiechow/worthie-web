// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const brand = require('./routes/brand.route');
const app = express();

app.use('/brands', brand);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
