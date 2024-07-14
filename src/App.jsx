import { React , useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Loader from './Components/Loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this time based on your requirements
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className="container">
        <Navbar /> {/* Navbar is now outside of Routes */}
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
        <Routes>
          <Route exact path="/nav" element={<div>Navbar Page</div>} /> {/* Add an example route */}
          {/* Add your other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
