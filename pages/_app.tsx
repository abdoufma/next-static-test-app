import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/global.css';
//import Link from 'next/link';
// import React, { ReactElement } from 'react';
//@ts-check
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <header>My Header</header>
      <main style={{ padding: '1rem', minHeight: '80vh' }}>
        <Component {...pageProps} />
      </main>
      <footer>Footer</footer>
    </>
  );
}
