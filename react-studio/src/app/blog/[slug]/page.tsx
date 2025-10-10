import { Container } from 'react-bootstrap';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  // The paths look like: [{ params: { slug: 'first-post' } }, ...]
  // We need to return an array of slug objects: [{ slug: 'first-post' }, ...]
  return paths.map(path => ({
    slug: path.params.slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  
  const description = postData.content.substring(0, 160) + '...';

  return {
    title: postData.title,
    description: description,
    openGraph: {
      title: postData.title,
      description: description,
      url: `/blog/${postData.id}`,
      type: 'article',
      publishedTime: postData.date,
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <main>
      <Container className="py-5">
        <article>
          <h1>{postData.title}</h1>
          <div className="text-muted mb-4">
            {postData.date}
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Container>
    </main>
  );
}
