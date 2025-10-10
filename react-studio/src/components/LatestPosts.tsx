import Link from 'next/link';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getSortedPostsData } from '@/lib/posts';

export default function LatestPosts() {
  const allPostsData = getSortedPostsData();
  const latestPosts = allPostsData.slice(0, 3);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Latest Posts</h2>
      <Row>
        {latestPosts.map(({ id, date, title }) => (
          <Col md={4} key={id} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-muted">{date}</Card.Text>
                <Link href={`/blog/${id}`} passHref className="mt-auto">
                  <Card.Link>Read More</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
