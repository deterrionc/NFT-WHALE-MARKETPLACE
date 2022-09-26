import React from 'react';

const data = [
  {
    title: 'Step 1',
    subtitle: 'Apply for Launchpad',
    content: 'Get in touch if you have an idea, or artwork and want to showcase it to the world. We want to help you get launched.'
  },
  {
    title: 'Step 2',
    subtitle: 'Customize your launch',
    content: 'Add your work and tell us how, and when you want to sell your NFTs - we’ll help set up the collection'
  },
  {
    title: 'Step 3',
    subtitle: 'Mint with VAULT3D',
    content: 'Get in touch if you have an idea, or artwork and want to showcase it to the world. We want to help you get launched.'
  },
  {
    title: 'Step 4',
    subtitle: 'Use our marketplace',
    content: 'Provide your community with instant, verified access to the VAULT3D marketplace'
  }
];

export default function StepCardsSection() {
  return (
    <div className="grid grid-cols-4 gap-8 mt-24">
      {
        data.map((dataItem, index) => (
          <div key={index} className='bg-[#222222] rounded-lg p-6'>
            <p className='text-gray-200 font-medium text-xl'>{dataItem.title}</p>
            <p className='text-gray-200 mt-6 text-md'>{dataItem.subtitle}</p>
            <p className='text-gray-200 mt-4 text-sm'>{dataItem.content}</p>
          </div>
        ))
      }
    </div>
  );
}