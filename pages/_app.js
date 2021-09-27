import Head from 'next/head';
import NavBar from '../components/NavBar';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
