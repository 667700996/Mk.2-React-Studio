import Link from 'next/link';
import { Container, ListGroup } from 'react-bootstrap';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main>
      <Container className="py-5">
        <h1>Blog</h1>
        <p>Here are our latest posts.</p>
        <ListGroup>
          {allPostsData.map(({ id, date, title }) => (
            <ListGroup.Item key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className="text-muted">{date}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </main>
  );
}
