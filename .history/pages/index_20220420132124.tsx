import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <div>
        <div>
          <h1 className="text-6xl max-w-xl font-serif"> <span className="underline decoration-black decoration-4">Medium</span> is a place to write read and connect</h1>
          <h2>
            It is easy, fun and free. Post your thinking on any topic and connect to readers.
          </h2>
        </div>
        <div></div>
      </div>
   </div>
  )
}

export default Home
