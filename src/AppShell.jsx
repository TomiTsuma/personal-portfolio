import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Entrepreneurship from './pages/Entrepreneurship';
import Research from './pages/Research';
import Publications from './pages/Publications';
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

// Shared route tree, rendered by both the client entry (wrapped in
// HashRouter, src/App.jsx) and the SSG prerender entry (wrapped in
// StaticRouter, src/entry-server.jsx). Keep this the single source of
// truth for routes — update scripts/routes.js alongside any change here.
function AppShell() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
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
  );
}

export default AppShell;
