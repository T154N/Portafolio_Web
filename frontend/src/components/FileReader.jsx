import React from 'react';
import { Nav } from 'react-bootstrap';
import './Navbar.css'; // Importar estilos personalizados

const CustomNavbar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/" className="nav-link">
          Inicio
        </Nav.Link>
        <Nav.Link href="/projects" className="nav-link">
          Proyectos
        </Nav.Link>
        <Nav.Link href="/contact" className="nav-link">
          Contacto
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default CustomNavbar;