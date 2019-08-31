const mongoose = require('mongoose');
const  { Schema } = mongoose;


const projectSchema = new Schema({
  description: String,
  imgUrl: String,
  link: String,
  title: String
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;