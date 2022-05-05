import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <Sidebar />
        
        <Feed />
        {/*widgets*/}
      </main>
    </div>
  )
}

export default Home
