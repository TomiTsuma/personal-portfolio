import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Entrepreneurship from './pages/Entrepreneurship';
import Research from './pages/Research';
import GNNResearch from './pages/GNNResearch';
import DataWarehousing from './pages/DataWarehousing';
import DWFirstPrinciples from './pages/DWFirstPrinciples';
import GNNExtractive from './pages/GNNExtractive';
import GNNDefinitions from './pages/GNNDefinitions';
import GNNFormer from './pages/GNNFormer';
import HomeLab from './pages/HomeLab';
import EnergyCrisis from './pages/EnergyCrisis';
import ColumnarDistillation from './pages/ColumnarDistillation';
import PlasmaStabilization from './pages/PlasmaStabilization';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/gnn" element={<GNNResearch />} />
            <Route path="/research/gnn/extractive-capabilities" element={<GNNExtractive />} />
            <Route path="/research/gnn/definition-of-terms" element={<GNNDefinitions />} />
            <Route path="/research/gnn/gnnformer-architecture" element={<GNNFormer />} />
            <Route path="/research/data-warehousing" element={<DataWarehousing />} />
            <Route path="/research/data-warehousing/first-principles" element={<DWFirstPrinciples />} />
            <Route path="/homelab" element={<HomeLab />} />
            <Route path="/research/energy-crisis" element={<EnergyCrisis />} />
            <Route path="/research/energy-crisis/columnar-distillation" element={<ColumnarDistillation />} />
            <Route path="/research/energy-crisis/plasma-stabilization" element={<PlasmaStabilization />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
