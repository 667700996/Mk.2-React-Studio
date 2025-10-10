'use client';

import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggleButton from './ThemeToggleButton'; // Import the button

export default function AppNavbar() {
  return (
    <Navbar bg="body-tertiary" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          React Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
            <ThemeToggleButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}