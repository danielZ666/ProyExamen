import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Hero />
        <Navbar />
        <Routes>
          <Route path="/" element={<Content page="principal" />} />
          <Route path="/peliculas" element={<Content page="peliculas" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
