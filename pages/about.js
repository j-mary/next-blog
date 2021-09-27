import Head from 'next/head';

const AboutPage = () => {
  console.log('[AboutPage] render');
  return (
    <>
      <Head>
        <title>My Blog - About</title>
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
};

export default AboutPage;
