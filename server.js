const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require('path');
const Project = require('./models/Project');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var distDir = __dirname + "client/dist/";
app.use(express.static(distDir));
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

app.get('/api', (req, res) => {
  Project.find().then((resp) => res.json(resp));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});