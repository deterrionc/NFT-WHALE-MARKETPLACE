import React from 'react';
import HeroSection from './HeroSection';
import PostCard from '../../components/PostCard';

const data = [
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/1'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/2'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/3'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/4'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/5'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/6'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/7'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/8'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/9'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/10'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/11'
  },
  {
    title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    date: '8 January, 2022',
    imageUrl: '/assets/images/post-card.png',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....',
    href: '/blog/12'
  }
];

export default function Blog() {
  return (
    <div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8 pt-28">
        <HeroSection />

        <div className='grid grid-cols-3 gap-8 mt-24'>
          {
            data.map((dataItem, index) => (
              <PostCard key={index} dataItem={dataItem} />
            ))
          }
        </div>
      </div>
    </div>
  );
}