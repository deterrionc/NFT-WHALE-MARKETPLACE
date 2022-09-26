import React, { useState } from 'react';
import Image from 'next/image';

export default function MustSelfCard() {
  const [walletConnected, setWalletConnected] = useState(false);
  return (
    <div className='bg-[#16151A] rounded-lg p-24 mt-12'>
      <div className='grid grid-cols-2 gap-x-80'>
        <div>
          <div className='bg-[#2D2C33] uppercase px-4 py-1 text-gray-300 text-md w-1/3 rounded-md flex justify-center'>
            featured launch
          </div>

          <p className='text-gray-200 text-5xl capitalize mt-12 leading-tight'>
            &mut self (Mutable Self),
            by Labyrinth
          </p>

          <div className='grid grid-cols-3 gap-x-4 mt-6'>
            <div className='bg-[#1B2331] rounded-md p-3'>
              <p className='text-gray-300 text-md'>90 Day Avg. Price</p>
              <p className='text-gray-300 text-md font-medium'>4,4132</p>
            </div>
            <div className='bg-[#1B2331] rounded-md p-3'>
              <p className='text-gray-300 text-md'>90 Day Avg. Price</p>
              <p className='text-gray-300 text-md font-medium'>4,4132</p>
            </div>
            <div></div>
          </div>

          <p className='text-gray-200 text-md mt-6'>
            The Baby Ape Social Club is a limited collection of Baby Apes that reside on Dab Island in the heart of the Bermuda Triangle. With the help of Micho Toshi, a former Hollywood executive and current screenwriter / NFT storyteller, we have crafted a story and club that you don’t want to miss out on.
          </p>

          <div className='w-3/5 mt-12'>
            {
              walletConnected ? (
                <button className='bg-gradient text-gray-900 p-3 w-full font-medium' onClick={() => setWalletConnected(false)}>Mint</button>
              ) : (
                <button className='bg-transparent border-gradient text-gray-300 p-3 w-full' onClick={() => setWalletConnected(true)}>Connect Wallet</button>
              )
            }
          </div>
        </div>

        <div>
          <div className='w-full'>
            <Image src={`/assets/images/${walletConnected ? 'mint' : 'dove'}.png`} width={540} height={423} alt='' className='rounded-lg' />
          </div>

          <div className='mt-5'>
            <label className='text-gray-200 text-md uppercase'>featured launch</label>
            <div className='mt-1'>
              <div className="w-full bg-[#313030] h-3 rounded-full">
                <div className="bg-[#4E6AFF] h-3 w-4/5 rounded-full"></div>
              </div>
            </div>
            <p className='text-gray-200 text-sm text-right mt-4'>100% (3333/3333)</p>
          </div>
        </div>
      </div>
    </div>
  );
}