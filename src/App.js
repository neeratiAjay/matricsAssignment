import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import RoadMap from './components/RoadMap'
import WhyUs from './components/WhyUs'

import './App.css'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/tokenomics" element={<Tokenomics />} />
      <Route path="/roadmap" element={<RoadMap />} />
      <Route path="/whyus" element={<WhyUs />} />
    </Routes>
  </Router>
)

export default App
