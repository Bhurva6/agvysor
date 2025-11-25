import { useState } from 'react';
import './PricingPage.css';

function PricingPage() {
  const [selectedTier, setSelectedTier] = useState(null);

  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter Package',
      icon: '🚀',
      price: '$2,500 - $5,000',
      duration: 'per project',
      description: 'Entry-level consulting for early-stage startups',
      idealFor: 'Seed to pre-seed startups',
      features: [
        'Market segmentation analysis',
        'Initial growth strategy development',
        'Customer profile identification',
        'Basic competitive analysis',
        '2 strategy sessions (2 hours each)',
        'Written recommendations report',
        'Email support for 30 days'
      ],
      cta: 'Get Started',
      highlight: false
    },
    {
      id: 'growth',
      name: 'Growth Package',
      icon: '📈',
      price: '$6,000 - $12,000',
      duration: 'per project',
      description: 'Comprehensive growth & business development',
      idealFor: 'Early revenue startups',
      features: [
        'Everything in Starter Package',
        'Comprehensive pricing strategy',
        'Partnership planning & identification',
        'Leadership coaching sessions (4 sessions)',
        'Go-to-market strategy',
        'Sales funnel optimization',
        'Monthly check-ins for 3 months',
        'Priority email & phone support'
      ],
      cta: 'Get Started',
      highlight: true,
      badge: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      icon: '👑',
      price: 'Custom',
      priceSubtext: 'Starting at $15,000',
      duration: '',
      description: 'Full consulting & leadership coaching solution',
      idealFor: 'SME & scaling ventures',
      features: [
        'Everything in Growth Package',
        'End-to-end strategy development',
        'Executive leadership coaching (ongoing)',
        'Dedicated account manager',
        'Custom partnership & collaboration models',
        'Revenue optimization & forecasting',
        'Quarterly strategic planning sessions',
        'Ongoing support & optimization',
        '24/7 priority support'
      ],
      cta: 'Request Quote',
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "The ROI was incredible - we 3x'd our revenue in 6 months after implementing Agvysor's growth strategy.",
      author: "Sarah Chen",
      company: "TechStart Inc.",
      avatar: "👩‍💼"
    },
    {
      quote: "The pricing strategy alone paid for itself within the first quarter. Outstanding value!",
      author: "Michael Rodriguez",
      company: "GrowthCo",
      avatar: "👨‍💼"
    }
  ];

  const handleContactClick = (tier) => {
    setSelectedTier(tier);
    window.location.href = `/contact?package=${tier}`;
  };

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        {/* Header Section */}
        <section className="pricing-header">
          <h1 className="pricing-title">Transparent, Value-Based Pricing</h1>
          <p className="pricing-subtitle">
            Flexible, outcome-driven pricing designed to align with your business goals and budget
          </p>
        </section>

        {/* Overview Section */}
        <section className="pricing-overview">
          <div className="overview-card">
            <h2 className="overview-title">Our Pricing Philosophy</h2>
            <p className="overview-text">
              We use a <strong>value-based pricing approach</strong> combined with tiered packages 
              and custom enterprise solutions, allowing startups and SMEs to choose the right level 
              of engagement. Our prices are set according to the tangible business outcomes expected — 
              like revenue growth, market traction, or leadership transformation.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="pricing-tiers">
          <div className="tiers-grid">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`tier-card ${tier.highlight ? 'highlighted' : ''}`}
              >
                {tier.badge && <div className="tier-badge">{tier.badge}</div>}
                
                <div className="tier-icon">{tier.icon}</div>
                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-description">{tier.description}</p>
                
                <div className="tier-pricing">
                  <div className="tier-price">{tier.price}</div>
                  {tier.priceSubtext && (
                    <div className="tier-price-subtext">{tier.priceSubtext}</div>
                  )}
                  {tier.duration && (
                    <div className="tier-duration">{tier.duration}</div>
                  )}
                </div>

                <div className="tier-ideal">
                  <strong>Ideal for:</strong> {tier.idealFor}
                </div>

                <div className="tier-features">
                  <h4 className="features-title">What's Included:</h4>
                  <ul className="features-list">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className={`tier-cta ${tier.highlight ? 'primary' : 'secondary'}`}
                  onClick={() => handleContactClick(tier.id)}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Why Our Pricing Works */}
        <section className="pricing-benefits">
          <h2 className="benefits-title">Why Our Pricing Works</h2>
          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-icon">💎</div>
              <h3>Value-Driven</h3>
              <p>Transparent cost expectations upfront that match the value delivered</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon">📊</div>
              <h3>Flexible & Scalable</h3>
              <p>Start small and scale services as your business grows</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon">🎯</div>
              <h3>Measurable Results</h3>
              <p>Designed for predictable budgeting and measurable outcomes</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon">🤝</div>
              <h3>ROI-Focused</h3>
              <p>Investment designed to generate returns that exceed the cost</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pricing-testimonials">
          <h2 className="testimonials-title">Real Results, Real Value</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-box">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="pricing-cta">
          <div className="cta-box">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-text">
              Contact us for a free consultation to identify the right package and customized 
              quote for your unique needs.
            </p>
            <button className="cta-button" onClick={() => window.location.href = '/contact'}>
              Schedule Free Consultation
            </button>
            <p className="cta-note">
              💡 Not sure which package is right for you? Our team will help you choose.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pricing-faq">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">Can I upgrade my package later?</h3>
              <p className="faq-answer">
                Absolutely! Many clients start with our Starter Package and upgrade as their 
                needs grow. We'll credit your initial investment toward the upgraded package.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you offer payment plans?</h3>
              <p className="faq-answer">
                Yes, we offer flexible payment plans for Growth and Enterprise packages. 
                Discuss options during your consultation.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What if I need something custom?</h3>
              <p className="faq-answer">
                We specialize in custom solutions! Contact us to discuss your specific needs, 
                and we'll create a tailored proposal.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is there a money-back guarantee?</h3>
              <p className="faq-answer">
                We stand behind our work. If you're not satisfied after the first session, 
                we'll refund your investment, no questions asked.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PricingPage;
