import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Dashboardlayout';
import Finance from './pages/Finance';
import Analytics from './pages/Analytics';
import Education from './pages/Education';
import Transactions from './pages/Transactions';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/transactions" element={<Transactions />} />
          <Route path="/" element={<Finance />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;