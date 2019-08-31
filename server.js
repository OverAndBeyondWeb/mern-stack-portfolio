const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection is made');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/temp.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});