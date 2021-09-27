import Head from 'next/head';
import { getPost, getPostIds } from '../../lib/posts';

export const getStaticPaths = async () => {
  const postIds = await getPostIds();
  return {
    paths: postIds.map((postId) => ({
      params: { postId },
    })),
    // [
    //   { params: { postId: 'first-post' } },
    //   { params: { postId: 'second-post' } },
    // ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { postId } }) => {
  console.log('[PostPage] getStaticProps()');
  const post = await getPost(postId);
  return {
    props: { post },
  };
};

const PostPage = ({ post }) => {
  console.log('[PostPage] render ');
  return (
    <>
      <Head>
        <title>My Blog - {post.title}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default PostPage;
