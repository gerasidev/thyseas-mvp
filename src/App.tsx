import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <div style={{ padding: '6rem 0', textAlign: 'center' }} className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to build the future?</h2>
        <a href="#" className="btn">Get Started</a>
      </div>
      <Footer />
    </div>
  )
}

export default App
