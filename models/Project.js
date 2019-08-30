const { Schema } = require('mongoose');


const Project = new Schema({
  description: String,
  imgUrl: String,
  link: String,
  title: String
});

module.exports = mongoose.model('Project', Project);