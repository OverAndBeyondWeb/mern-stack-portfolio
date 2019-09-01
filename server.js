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

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection is made');
});

app.get('/api', (req, res) => {
  Project.find().then((resp) => res.json(resp));
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});