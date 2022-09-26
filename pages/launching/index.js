import React, { useState } from 'react';
import Image from 'next/image';
import Timer from './Timer';
import { Icon } from '@iconify/react';

export default function Launching() {
  const [connected, setConnected] = useState(false);

  const handleConnectWallet = () => {
    setConnected(!connected);
  };
  return (
    <div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8 pt-28">
        <div className='grid grid-cols-2 gap-x-8 items-center'>
          <div>
            <Image src="/assets/images/boost.png" alt='' width={800} height={1175} />
          </div>

          <div>
            <Timer />

            <button className='border-gradient p-6 text-xl w-full mt-12 text-gray-200' onClick={handleConnectWallet}>
              {connected ? 'Place bid' : 'Connect wallet'}
            </button>

            <div className='mt-12'>
              <p className='text-gray-200 text-6xl'>Unbreakable Defense Orb</p>

              <div className='flex items-center gap-x-4 mt-2'>
                <p className='text-gray-200 text-xl uppercase'>Created by </p>
                <p className='bg-gradient bg-clip-text text-transparent flex items-center gap-x-1 text-3xl'>
                  <Icon icon="akar-icons:circle-check" className='text-gray-300' />
                  Dreamland Monkeys
                </p>
              </div>

              <p className='text-gray-300 text-xl mt-5'>
                The Baby Ape Social Club is a limited collection of Baby Apes that reside on Dab Island in the heart of the Bermuda Triangle. With the help of Micho Toshi, a former Hollywood executive and current screenwriter / NFT storyteller, we have crafted a story and club that you don’t want to miss out on.
              </p>

              <div className='flex justify-end gap-x-2 mt-8'>
                <button
                  type="button"
                  className="p-2 border border-transparent rounded-md shadow-sm bg-[#202851] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#202851] text-gray-100"
                >
                  <Icon icon="fontisto:world-o" className='text-xl' />
                </button>
                <button
                  type="button"
                  className="p-2 border border-transparent rounded-md shadow-sm bg-[#202851] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#202851] text-gray-100"
                >
                  <Icon icon="akar-icons:discord-fill" className='text-xl' />
                </button>
                <button
                  type="button"
                  className="p-2 border border-transparent rounded-md shadow-sm bg-[#202851] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#202851] text-gray-100"
                >
                  <Icon icon="akar-icons:twitter-fill" className='text-xl' />
                </button>
              </div>
            </div>

            <div className='mt-24'>
              <p className='text-gray-200 text-xl font-medium'>How it works: </p>
              <p className='text-gray-300 text-lg mt-3'>
                1. Connect your wallet and place a bid. The bid must be at least 1.00 SOL greater than the current bid <br />
                2. You will automatically get your SOL returned to your wallet if outbid <br />
                3. When auction closes, the artwork will belong to the highest bidder. Please claim the NFT by pressing the “claim item” button <br />
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-x-8 items-center mt-24'>
          <div>
            <p className='text-gray-200 text-lg font-medium'>Attributes: </p>
            <div className='grid grid-cols-3 gap-6 mt-8'>
              {
                [0, 1, 2, 3, 4, 5].map(item => (
                  <div className='bg-[#1B2331] rounded-lg py-4 px-6' key={item}>
                    <p className='text-gray-200 text-lg uppercase'>Face</p>
                    <p className='text-gray-200 text-lg uppercase font-medium mt-2'>0.59 BNB</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}