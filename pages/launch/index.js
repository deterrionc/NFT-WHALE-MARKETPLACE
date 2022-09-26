import React from 'react';
import MustSelfCard from './MustSelfCard';
import RatGangCard from './RatGangCard';
import CriclesSection from './CirclesSection';
import StepCardsSection from './StepCardsSection';

export default function Launch() {
  return (
    <div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8 mt-28">
        <RatGangCard />
        <MustSelfCard />
        <CriclesSection />
        <StepCardsSection />
      </div>
    </div>
  );
}