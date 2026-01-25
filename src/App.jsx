import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Entrepreneurship from './pages/Entrepreneurship';
import Research from './pages/Research';
import GNNResearch from './pages/GNNResearch';
import DataWarehousing from './pages/DataWarehousing';
import DWFirstPrinciples from './pages/DWFirstPrinciples';
import HomeLab from './pages/HomeLab';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/gnn" element={<GNNResearch />} />
            <Route path="/research/data-warehousing" element={<DataWarehousing />} />
            <Route path="/research/data-warehousing/first-principles" element={<DWFirstPrinciples />} />
            <Route path="/homelab" element={<HomeLab />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
