import React from 'react';
import HeroSection from './HeroSection';
import FeaturedArtists from './FeaturedArtists';
import CrowdfundingCreatives from './CrowdfundingCreatives';
import EventsSection from './EventsSection';
import TestimonialSection from './TestimonialSection';
import TrendingSongs from './TrendingSongs'; // Import the new TrendingSongs component


// Import artist and event images
import artist1 from '../assets/Gyakie.png'; // Update paths as needed
import artist2 from '../assets/kidakudz.png';
import artist3 from '../assets/kidakudz.png';
import artist4 from '../assets/kidakudz.png';
import artist5 from '../assets/kidakudz.png';
import artist6 from '../assets/kidakudz.png';
import eventImage1 from '../assets/kidakudz.png';
import eventImage2 from '../assets/kidakudz.png';

// Sample data for artists, crowdfunding project, and events
const artists = [
  { name: "Burna Boy", profileImage: artist1 },
  { name: "Omah Lay", profileImage: artist2 },
  { name: "Victony", profileImage: artist3 },
  { name: "Gento Bareto", profileImage: artist4 },
  { name: "Gyakie", profileImage: artist5 },
  { name: "Addi Melody", profileImage: artist6 },
];

const crowdfundingProject = {
  projectName: "Reviving Nigerian Afrobeats",
  artistName: "Burna Boy",
  artistImage: artist1,
  projectDescription: "Join me in bringing back the golden era of Afrobeats with my new album. Your support will help fund production, marketing, and distribution.",
  goalAmount: 10000,
  currentAmount: 5000,
  timeLeft: "15 days",
};

const events = [
  {
    id: 1,
    name: "Afrobeats Concert",
    date: "October 15, 2024",
    venue: "Lagos Convention Centre",
    image: eventImage1,
    details: "An unforgettable night of Afrobeats with top artists performing live. Don't miss out!",
    ticketAvailable: true,
    ticketLink: "http://example.com/tickets",
  },
  {
    id: 2,
    name: "Music Festival",
    date: "November 20, 2024",
    venue: "Victoria Island, Lagos",
    image: eventImage2,
    details: "Join us for a two-day festival featuring the best in Afrobeats, Hip-Hop, and more!",
    ticketAvailable: false,
    ticketLink: "http://example.com/tickets",
  },
  // Add more events as needed
];

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedArtists artists={artists} />
      <CrowdfundingCreatives project={crowdfundingProject} />
      <TrendingSongs /> {/* Add Trending Songs Section here */}
      <EventsSection events={events} />
      <TestimonialSection /> {/* Add Testimonial Section here */}
    </div>
  );
};

export default LandingPage;
