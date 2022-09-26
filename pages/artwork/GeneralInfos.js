import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

export default function GeneralInfos() {
  return (
    <div className="w-full">
      <div className='flex gap-x-8 items-center'>
        <div className='w-2/5'>
          <Image width={660} height={660} alt="" src="/assets/images/nft_detail.png" />
        </div>
        <div className='w-3/5'>
          <p className="text-gray-200 text-3xl">Dreamland Monkeys #502</p>

          <div className='flex justify-between items-center'>
            <div>
              <p className="text-2xl text-gray-100 flex items-center text-transparent bg-gradient bg-clip-text mb-3">
                <Icon icon="akar-icons:circle-check" className="text-gray-100 mr-2" /> Dreamland Monkeys
              </p>
            </div>
            <div className='flex items-center'>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent text-lg leading-4 rounded-md text-gray-200"
              >
                <Icon icon="bx:bxs-share-alt" className="mr-3" />
                Share
              </button>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent text-lg leading-4 rounded-md text-gray-200"
              >
                <Icon icon="el:refresh" />
              </button>
            </div>
          </div>

          <div className='w-full bg-[#222222] rounded-lg p-4 my-5'>
            <div className="flex gap-x-2 items-center">
              <Icon icon="ant-design:tag-filled" className="text-gray-200 text-lg" />
              <span className='text-md text-gray-500'>Current bid</span>
            </div>

            <p className='text-lg text-gray-200 mt-2 ml-7'>1.47 BNB</p>

            <div className='grid grid-cols-2 gap-x-6 mt-3 items-center'>
              <div>
                <button
                  type="submit"
                  className="w-full items-center justify-center px-8 py-3 font-medium text-gray-900 bg-gradient text-md"
                >
                  Buy now
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full items-center justify-center px-8 py-3 font-medium text-gray-200 bg-transparent text-md border-gradient"
                >
                  Make offer
                </button>
              </div>
            </div>
          </div>


          <p className='text-md text-gray-200'>
            The Baby Ape Social Club is a limited collection of Baby Apes that reside on Dab Island in the heart of the Bermuda Triangle. With the help of Micho Toshi, a former Hollywood executive and current screenwriter / NFT storyteller, we have crafted a story and club that you don’t want to miss out on.
          </p>
        </div>
      </div>
    </div >
  );
}