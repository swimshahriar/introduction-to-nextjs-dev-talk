import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function SSR({ products, time }) {
  return (
    <>
      <Head>
        <title>SSR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{time}</h1>
        {products?.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch('https://fakestoreapi.com/products');
  const products = await data.json();

  return {
    props: {
      products,
      time: new Date().toLocaleTimeString(),
    },
  };
}
