import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'; // Importar estilos para el layout

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <CustomNavbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta para la página de Inicio */}
            <Route path="/projects" element={<Projects />} /> {/* Ruta para la página de Proyectos */}
            <Route path="/contact" element={<Contact />} /> {/* Ruta para la página de Contacto */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;