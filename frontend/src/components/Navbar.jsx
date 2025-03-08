import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css'; // Importar estilos personalizados


const CustomNavbar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link as={Link} to="/" className="nav-link">
          <FaHome className="nav-icon" />
          <span className="nav-text">Inicio</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/projects" className="nav-link">
          <FaProjectDiagram className="nav-icon" />
          <span className="nav-text">Proyectos</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="nav-link">
          <FaEnvelope className="nav-icon" />
          <span className="nav-text">Contacto</span>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default CustomNavbar;