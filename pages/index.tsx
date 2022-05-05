import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*sidebar */}
        <Sidebar /> 
        {/*feed */}

        {/*widgets*/}

      </main>


    </div>
  )
}

export default Home
