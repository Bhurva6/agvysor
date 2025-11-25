import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessDevelopment from './pages/BusinessDevelopment';
import PricingStrategyService from './pages/PricingStrategyService';
import PartnershipsService from './pages/PartnershipsService';
import LeadershipCoaching from './pages/LeadershipCoaching';
import PricingPage from './pages/PricingPage';
import InsightsPage from './pages/InsightsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/business-development" element={<BusinessDevelopment />} />
            <Route path="/services/pricing-strategy" element={<PricingStrategyService />} />
            <Route path="/services/partnerships" element={<PartnershipsService />} />
            <Route path="/services/leadership-coaching" element={<LeadershipCoaching />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
