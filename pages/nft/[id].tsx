import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import React from 'react'

const NFTDropPage = () => {
  const nextRouter = useRouter()
  const connectWithMetaMask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()
  return (
    <div className="flex h-screen flex-col transition-all lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-500 to-rose-200 lg:col-span-4">
        <div className="flex flex-col items-center lg:min-h-screen">
          <div className="flex flex-shrink overflow-hidden rounded-full bg-gradient-to-br from-yellow-500 to-purple-400 p-2">
            <img
              className="w-44 rounded-full object-cover transition-all duration-700 ease-out lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">Azam's Punks</h1>
            <h2
              onClick={() =>
                nextRouter.push(
                  'https://www.youtube.com/channel/UCXlIiS_QWq4Ko3MIG4_oY8A'
                )
              }
              className="cursor-pointer select-none text-xl text-gray-800 transition-all duration-1000 ease-in-out hover:underline"
            >
              A single 9 year-old coder by the name of Azam
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col px-5 lg:col-span-6 lg:px-20">
        <header className="my-1.5 flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-1/2">
            The{' '}
            <span className="font-semibold underline decoration-blue-300 underline-offset-2">
              Code With Azam
            </span>{' '}
            NFT Market Place
          </h1>
          <button
            onClick={!address ? connectWithMetaMask : disconnect}
            className="rounded-full bg-slate-500 px-4 py-2 text-lg font-thin text-white lg:px-5 lg:py-3"
          >
            {!address ? 'Sign In' : 'Sign Out'}
          </button>
        </header>
        <hr />
        <section className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0">
          <h1
            className={`cursor-default select-none text-xl font-thin text-rose-300 ${
              address ? 'hover:animate-pulse' : 'hover:animate-none'
            }`}
          >
            {address
              ? `Hello ${address.slice(0, 10)}...${address.slice(-8)}`
              : 'Please Sign In'}
          </h1>
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-semibold">
            Azam's Punks coding club | NFT Drop
          </h1>

          <p className="py-2 text-green-500">13/21 NFT's claimed</p>
        </section>

        <button className="my-10 h-16 rounded-2xl bg-red-600 text-white transition-all duration-1000 ease-in-out hover:opacity-50">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
