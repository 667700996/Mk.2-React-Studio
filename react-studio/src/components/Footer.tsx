'use client';

import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container className="text-center">
        <small>Copyright &copy; {new Date().getFullYear()} React Studio. All Rights Reserved.</small>
      </Container>
    </footer>
  );
}
