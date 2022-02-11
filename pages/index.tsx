import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Grace Harbor Members</title>
        <meta name="description" content="Grace Harbor Membership App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button className="button is-primary">Button</button>
      </main>
    </div>
  );
}

export default Home
