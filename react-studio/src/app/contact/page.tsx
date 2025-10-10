'use client';

import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);

    // NOTE: API route will be created in the next step
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      setSubmissionStatus('error');
    }
  };

  return (
    <main>
      <Container className="py-5" style={{ maxWidth: '600px' }}>
        <h1>Contact Us</h1>
        <p>Have a question or want to work together? Send a message.</p>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {submissionStatus === 'success' && (
          <Alert variant="success" className="mt-4">
            Your message has been sent successfully!
          </Alert>
        )}
        {submissionStatus === 'error' && (
          <Alert variant="danger" className="mt-4">
            Something went wrong. Please try again later.
          </Alert>
        )}
      </Container>
    </main>
  );
}
