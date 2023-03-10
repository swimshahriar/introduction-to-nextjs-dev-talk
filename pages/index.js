import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function ClientSide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <Head>
        <title>Client Side</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hello</h1>
        {data?.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </main>
    </>
  );
}
