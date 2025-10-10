'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-light p-5 rounded-lg m-3">
        <Container>
            <Row className="justify-content-center text-center">
                <Col md={8}>
                    <h1 className="display-4 fw-bold">Welcome to React Studio</h1>
                    <p className="lead">
                        A creative space for modern web development with React, Next.js, and more.
                    </p>
                    <p>
                        Explore my latest articles and projects.
                    </p>
                    <Link href="/blog" passHref>
                        <Button variant="primary" size="lg">
                            Go to Blog
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
