import React from 'react';
import ComingSoonSection from './ComingSoonSection';
import PopularCollectionsSection from './PopularCollectionsSection';
import TopCollectionsSection from './TopCollectionsSection';
import ExploreItemsSection from './ExploreItemsSection';
import CreateAndSellSection from './CreateAndSellSection';
import HowToStartSection from './HowToStartSection';
import NewCollectionsSection from './NewCollectionsSection';
import HeroSliderSection from './HeroSliderSection';

export default function HomePage() {
  return (
    <>
      <HeroSliderSection />
      <ComingSoonSection />
      <NewCollectionsSection />
      <PopularCollectionsSection />
      <TopCollectionsSection />
      <ExploreItemsSection />
      <CreateAndSellSection />
      <HowToStartSection />
    </>
  );
}