import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'; // Importar estilos para el layout
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Container sx={{ mt: 5 }}>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Ruta para la página de Inicio */}
              <Route path="/projects" element={<Projects />} /> {/* Ruta para la página de Proyectos */}
              <Route path="/contact" element={<Contact />} /> {/* Ruta para la página de Contacto */}
            </Routes>
          </Container>
        </div>
      </div>
    </Router>
  );
};

export default App;