const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;