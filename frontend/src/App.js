import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ArtistProfile from './components/ArtistProfile';
import MusicPlayer from './components/MusicPlayer';
import EventsPage from './components/EventsPage';
import DiscoverMusic from './components/DiscoverMusic';
import SignUp from './components/SignUp'; // Already correct
import Onboarding from './components/Onboarding'; // Already correct
import ArtistOnboarding from './components/ArtistOnboarding'; // Import ArtistOnboarding
import Login from './components/Login'; // Already correct
import './styles.css';

function App() {
  const isLoggedIn = false; // This would change based on your actual authentication logic (use context or state)

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} /> {/* Pass the login state if necessary */}
      
      {/* Define the application routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Sign up route */}
        <Route path="/signup" element={<SignUp />} /> 
        
        {/* Onboarding route */}
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Artist onboarding route */}
        <Route path="/artist-onboarding" element={<ArtistOnboarding />} /> {/* Add ArtistOnboarding route */}

        {/* Route for artist profile dashboard */}
        <Route path="/artist-dashboard" element={<ArtistProfile />} />

        {/* Music player route */}
        <Route path="/music-player" element={<MusicPlayer />} />

        {/* Events page route */}
        <Route path="/events" element={<EventsPage />} />

        {/* Discover music route */}
        <Route path="/discover" element={<DiscoverMusic />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />  {/* Add Login Route */}

        {/* Add more routes as needed */}
      </Routes>

      {/* Footer is placed outside the Routes to show on every page */}
      <Footer />
    </Router>
  );
}

export default App;
