const express = require('express'); // 🚀
const mongoose = require('mongoose'); // 🍃
const cors = require('cors'); // 🌐
require('dotenv').config(); // 🔑

const app = express();
const PORT = process.env.PORT || 5000; // ⚡
const projectRoutes = require('./routes/projectRoutes');
// Middlewares
app.use(cors()); // 🌍
app.use(express.json()); // 📦
app.use('/api/projects', projectRoutes);

// Conexión a MongoDB 🛠️
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB')) // ✅
  .catch(err => console.error('❌ Error conectando a MongoDB:', err)); // ❌

// Rutas 🛣️
app.get('/', (req, res) => {
  res.send('¡Backend del portafolio funcionando! 🚀'); // 🎯
});

// Iniciar servidor 🖥️
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`); // 🚀
});


