import { Link } from 'react-router-dom';
import './ServicePage.css';

function BusinessDevelopment() {
  return (
    <div className="service-page">
      <div className="service-container">
        <h1 className="service-header">Business Development & Growth Strategies</h1>
        
        <p className="service-intro">
          Agvysor helps startups identify ideal customer segments, sharpen offerings, 
          and build repeatable channels for sustainable growth.
        </p>

        <section className="key-benefits">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <p>Target precise market segments using data-driven insights</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <p>Design high-impact customer acquisition and partnership strategies</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <p>Build scalable sales and business development routines</p>
            </div>
          </div>
        </section>

        <section className="case-study">
          <h2>Case Study</h2>
          <div className="case-study-box">
            <h3>How a SaaS Startup Raised MRR by 300% in 6 Months with Our Growth Blueprint</h3>
            <p>
              By implementing our comprehensive growth strategy, a B2B SaaS startup was able to 
              identify their ideal customer profile, optimize their sales funnel, and scale their 
              monthly recurring revenue from $50K to $200K in just six months.
            </p>
            <Link to="/case-studies/saas-growth" className="read-more-link">
              Read full case study →
            </Link>
          </div>
        </section>

        <div className="service-cta">
          <button className="cta-button">Book a Free Strategy Session</button>
        </div>
      </div>
    </div>
  );
}

export default BusinessDevelopment;
