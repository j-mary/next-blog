import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const HomePage = ({ posts }) => {
  console.log('[HomePage] render');
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
