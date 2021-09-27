import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import marked from 'marked';

export const getPost = async (postId) => {
  const source = await readFile(`content/posts/${postId}.md`, 'utf-8');
  const {
    data: { title, date },
    content,
  } = matter(source);
  const body = marked(content);
  return { title, date, body };
};

export const getPosts = async () => {
  const postIds = await getPostIds();
  const posts = [];

  for (const id of postIds) {
    const post = await getPost(id);
    posts.push({ id, ...post });
  }

  return posts;
};

export const getPostIds = async () => {
  const suffix = '.md';
  const files = await readdir('content/posts');
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
};
