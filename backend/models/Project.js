const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  technologies: [{ type: String }],
  githubUrl: { type: String },
  demoUrl: { type: String },
});

module.exports = mongoose.model('Project', ProjectSchema);