// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const brand = require('./routes/brand.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://adminuser:Moncul0us!@cluster0-vmbk5.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(process.env.MONGODB_URI || dev_db_url, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log('DB Connection Error:');
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/brands', brand);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
