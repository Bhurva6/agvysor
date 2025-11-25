import './PricingStrategyService.css';

function PricingStrategyService() {
  const benefits = [
    {
      icon: '💰',
      title: 'Value-Based Pricing Frameworks',
      description: 'Align with customer willingness-to-pay and market benchmarks'
    },
    {
      icon: '📊',
      title: 'Tiered Pricing Models',
      description: 'Capture multiple customer segments and increase average revenue per user (ARPU)'
    },
    {
      icon: '🔍',
      title: 'Competitive Pricing Analysis',
      description: 'Ongoing optimization to stay ahead in dynamic markets'
    },
    {
      icon: '📦',
      title: 'Packaging & Bundling',
      description: 'Strategic guidance on packaging, bundling, and discounting to improve conversion rates'
    },
    {
      icon: '💡',
      title: 'Subscription Pricing Insights',
      description: 'SaaS, subscription, and service-based pricing options suited for your business model'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from a new pricing strategy?',
      answer: 'Most clients see measurable improvements within 3-6 months. Quick wins like packaging adjustments can show results in 30-60 days, while comprehensive strategy changes typically manifest over a quarter.'
    },
    {
      question: 'Will changing our pricing upset existing customers?',
      answer: 'We design pricing transitions carefully with grandfathering strategies and clear communication plans to maintain customer trust while capturing new value from future customers.'
    },
    {
      question: 'How do you determine the right price point?',
      answer: 'We combine market research, competitive analysis, customer value perception studies, and your business goals to find the optimal price point that maximizes revenue while supporting growth.'
    },
    {
      question: 'Can you help with pricing for both B2B and B2C?',
      answer: 'Absolutely! Our team has extensive experience with B2B SaaS, B2C subscriptions, professional services, and hybrid models. We tailor our approach to your specific market dynamics.'
    }
  ];

  return (
    <div className="pricing-strategy-page">
      <div className="strategy-container">
        {/* Hero Section */}
        <section className="strategy-hero">
          <div className="hero-content-left">
            <h1 className="strategy-header">Pricing Strategy & Revenue Optimization</h1>
            <p className="strategy-intro">
              At Agvysor, we empower startups and SMEs to unlock their full revenue potential 
              through data-driven pricing strategies. Our tailored approach ensures your pricing 
              reflects the true value you deliver, accelerates customer acquisition, maximizes 
              lifetime value, and supports scalable growth.
            </p>
          </div>
          <div className="hero-visual">
            <div className="pricing-tiers-visual">
              <div className="visual-tier tier-basic">
                <div className="tier-label">Basic</div>
                <div className="tier-price">$49</div>
                <div className="tier-bar" style={{ height: '60px' }}></div>
              </div>
              <div className="visual-tier tier-pro">
                <div className="tier-label">Pro</div>
                <div className="tier-price">$99</div>
                <div className="tier-bar" style={{ height: '120px' }}></div>
              </div>
              <div className="visual-tier tier-enterprise">
                <div className="tier-label">Enterprise</div>
                <div className="tier-price">Custom</div>
                <div className="tier-bar" style={{ height: '180px' }}></div>
              </div>
            </div>
            <div className="growth-indicator">
              <span className="growth-arrow">↗</span>
              <span className="growth-text">10-30% Revenue Increase</span>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="what-you-get">
          <h2 className="section-title">What You Get</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Pricing Matters */}
        <section className="why-pricing-matters">
          <div className="matters-content">
            <h2 className="section-title">Why Pricing Matters</h2>
            <p className="matters-text">
              Your pricing strategy is one of the most powerful levers to drive growth and profitability. 
              Pricing too low leaves money on the table, while pricing too high can hinder customer adoption. 
              Our experience shows that thoughtful, data-backed pricing increases revenue by 
              <strong> 10%-30% within the first 6 months</strong>.
            </p>
            
            <div className="impact-stats">
              <div className="stat-box">
                <div className="stat-number">10-30%</div>
                <div className="stat-label">Revenue Increase</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">3-6</div>
                <div className="stat-label">Months to Results</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100+</div>
                <div className="stat-label">Pricing Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="case-study-highlight">
          <div className="case-study-content">
            <div className="quote-mark">"</div>
            <h3 className="case-study-title">Real Results from Real Clients</h3>
            <blockquote className="case-study-quote">
              We helped a SaaS startup recalibrate their pricing tiers, resulting in a 
              <strong> 25% revenue increase</strong> within the first quarter post-implementation.
            </blockquote>
            <div className="case-study-details">
              <div className="detail-item">
                <span className="detail-label">Industry:</span>
                <span className="detail-value">B2B SaaS</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Timeline:</span>
                <span className="detail-value">3 months</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Result:</span>
                <span className="detail-value">25% revenue growth</span>
              </div>
            </div>
            <a href="/case-studies" className="case-study-link">
              Read full case study →
            </a>
          </div>
        </section>

        {/* Our Process */}
        <section className="our-process">
          <h2 className="section-title">Our Proven Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Discovery & Analysis</h3>
              <p className="step-description">
                Comprehensive review of your current pricing, market position, and customer feedback
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Market Research</h3>
              <p className="step-description">
                Competitive analysis and customer willingness-to-pay studies
              </p>
            </div>
            <div className="process-step">
              <div class="step-number">3</div>
              <h3 className="step-title">Strategy Development</h3>
              <p className="step-description">
                Design optimal pricing tiers, packaging, and implementation roadmap
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Implementation & Optimization</h3>
              <p className="step-description">
                Launch support and ongoing optimization based on performance data
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">
                  <span className="faq-icon">❓</span>
                  {faq.question}
                </h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="strategy-cta">
          <div className="cta-container">
            <h2 className="cta-title">Ready to Optimize Your Pricing for Maximum Impact?</h2>
            <p className="cta-description">
              Let's discuss how our pricing strategy expertise can help you capture more value 
              and accelerate your revenue growth.
            </p>
            <button 
              className="cta-button"
              onClick={() => window.location.href = '/contact?service=pricing-strategy'}
            >
              Schedule a Free Pricing Consultation
            </button>
            <p className="cta-note">
              💡 No obligation. We'll analyze your situation and provide actionable insights.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PricingStrategyService;
