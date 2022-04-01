import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Home: NextPage = () => {

  const router = useRouter();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-12">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="h-16 cursor-default select-none text-ellipsis rounded-sm p-2 text-4xl font-semibold transition-all duration-1000 ease-in-out">
        Welcome To the NFT Drop Challenge
      </h1>

      <h1 className="h-16 cursor-pointer select-none text-ellipsis rounded-sm p-2 text-4xl font-medium text-orange-300 transition-all duration-1000 ease-in-out hover:text-blue-500" onClick={() => {router.push('/nft/AzamsPunks')}}>
        Click Here to View the NFT's of Azams Punks
      </h1>
    </div>
  )
}

export default Home
