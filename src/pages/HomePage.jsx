import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import CoreServices from '../components/CoreServices';
import FeaturedInsights from '../components/FeaturedInsights';
import TestimonialsSlider from '../components/TestimonialsSlider';
import AboutSnippet from '../components/AboutSnippet';
import Newsletter from '../components/Newsletter';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <HeroBanner />
      <CoreServices />
      <FeaturedInsights />
      <TestimonialsSlider />
      <AboutSnippet />
      <Newsletter />
    </div>
  );
}

export default HomePage;
