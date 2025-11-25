import './PartnershipsService.css';

function PartnershipsService() {
  const services = [
    {
      icon: '🔍',
      title: 'Partner Identification',
      description: 'Identify high-impact partners in your ecosystem, including resellers, technology platforms, agencies, and distribution networks'
    },
    {
      icon: '🤝',
      title: 'Partnership Models',
      description: 'Develop tailored partnership models that provide mutual value—revenue sharing, lead exchanges, bundled offers, co-marketing campaigns'
    },
    {
      icon: '📚',
      title: 'Partner Enablement',
      description: 'Design partner enablement and onboarding programs to ensure alignment and maximize productivity'
    },
    {
      icon: '📊',
      title: 'Governance & KPIs',
      description: 'Create governance frameworks and KPIs to measure partnership performance and continuously improve collaboration'
    },
    {
      icon: '✍️',
      title: 'Negotiations & Management',
      description: 'Support contract negotiations and ongoing relationship management to ensure long-term success'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Revenue Sharing',
      icon: '💰',
      description: 'Aligned incentives for mutual profit growth'
    },
    {
      type: 'Lead Exchange',
      icon: '🔄',
      description: 'Cross-referral networks to expand reach'
    },
    {
      type: 'Bundled Offers',
      icon: '📦',
      description: 'Combined solutions for greater value'
    },
    {
      type: 'Co-Marketing',
      icon: '📣',
      description: 'Joint campaigns to amplify brand visibility'
    },
    {
      type: 'Technology Integration',
      icon: '🔗',
      description: 'Platform partnerships for seamless solutions'
    },
    {
      type: 'Distribution Networks',
      icon: '🌐',
      description: 'Expanded market access through resellers'
    }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Accelerated Growth',
      description: 'Access new customers and markets faster than traditional channels'
    },
    {
      icon: '💡',
      title: 'Complementary Skills',
      description: 'Leverage partner expertise and technologies to enhance your offering'
    },
    {
      icon: '💵',
      title: 'Cost Efficiency',
      description: 'Share marketing and sales costs while expanding reach'
    },
    {
      icon: '⚖️',
      title: 'Risk Sharing',
      description: 'Distribute market and operational risks across partners'
    }
  ];

  return (
    <div className="partnerships-page">
      <div className="partnerships-container">
        {/* Hero Section */}
        <section className="partnerships-hero">
          <div className="hero-badge">Strategic Partnerships</div>
          <h1 className="partnerships-header">
            Unlock Growth with Strategic Partnerships
          </h1>
          <p className="partnerships-intro">
            At Agvysor, we believe partnerships and collaborations are powerful accelerators 
            for startups and SMEs to expand market reach, optimize resources, and drive sustainable 
            revenue growth. Our expert guidance helps you identify, structure, and nurture the 
            right alliances that align with your business goals.
          </p>
          
          <div className="hero-visual">
            <div className="partnership-network">
              <div className="network-center">
                <span className="center-node">Your Business</span>
              </div>
              <div className="network-connections">
                <div className="connection-node node-1">Technology Partners</div>
                <div className="connection-node node-2">Resellers</div>
                <div className="connection-node node-3">Agencies</div>
                <div className="connection-node node-4">Distribution</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="what-we-do">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Models */}
        <section className="partnership-models">
          <h2 className="section-title">Partnership Models We Design</h2>
          <p className="section-subtitle">
            Tailored collaboration frameworks that provide mutual value
          </p>
          <div className="models-grid">
            {partnershipTypes.map((model, index) => (
              <div key={index} className="model-card">
                <div className="model-icon">{model.icon}</div>
                <h3 className="model-type">{model.type}</h3>
                <p className="model-description">{model.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Partnerships Matter */}
        <section className="why-partnerships-matter">
          <div className="matter-content">
            <h2 className="section-title">Why Partnerships Matter</h2>
            <p className="matter-text">
              Strategic partnerships can open doors to new customers and markets faster and more 
              cost-effectively than traditional sales channels. They bring complementary skills, 
              technologies, and networks that multiply growth opportunities while sharing risks.
            </p>

            <div className="benefits-showcase">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon-large">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-text">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="partnerships-case-study">
          <div className="case-study-card">
            <div className="case-study-badge">Success Story</div>
            <h3 className="case-study-headline">
              40% Sales Pipeline Expansion Through Strategic Partnership
            </h3>
            <blockquote className="case-study-quote">
              "By crafting a co-marketing and revenue-share partnership with a key platform player, 
              we helped our client expand their sales pipeline by <strong>40% within six months</strong>."
            </blockquote>
            
            <div className="case-study-metrics">
              <div className="metric-box">
                <div className="metric-value">40%</div>
                <div className="metric-label">Pipeline Growth</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">6</div>
                <div className="metric-label">Months</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">1</div>
                <div className="metric-label">Key Partnership</div>
              </div>
            </div>

            <div className="case-study-details">
              <h4>Partnership Type</h4>
              <p>Co-marketing + Revenue-share model</p>
              
              <h4>Key Activities</h4>
              <ul>
                <li>Platform integration for seamless user experience</li>
                <li>Joint marketing campaigns and webinars</li>
                <li>Revenue-sharing agreement with performance KPIs</li>
                <li>Partner enablement and training program</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="partnerships-process">
          <h2 className="section-title">Our Partnership Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">1️⃣</div>
              <h3 className="step-title">Discovery & Strategy</h3>
              <p className="step-description">
                Understand your business goals, identify partnership opportunities, and define success criteria
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">2️⃣</div>
              <h3 className="step-title">Partner Identification</h3>
              <p className="step-description">
                Research and shortlist potential partners based on strategic fit and value alignment
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">3️⃣</div>
              <h3 className="step-title">Model Design</h3>
              <p className="step-description">
                Develop partnership structure, terms, and mutual value propositions
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">4️⃣</div>
              <h3 className="step-title">Launch & Optimize</h3>
              <p className="step-description">
                Execute partnership agreements, enable partners, and continuously optimize performance
              </p>
            </div>
          </div>
        </section>

        {/* Partner Ecosystem Types */}
        <section className="ecosystem-types">
          <h2 className="section-title">Partner Ecosystem Types We Work With</h2>
          <div className="ecosystem-grid">
            <div className="ecosystem-item">
              <div className="ecosystem-icon">🏢</div>
              <h3>Technology Platforms</h3>
              <p>SaaS integrations, APIs, marketplace listings</p>
            </div>
            <div className="ecosystem-item">
              <div className="ecosystem-icon">🛒</div>
              <h3>Resellers & Distributors</h3>
              <p>Channel partners to expand market reach</p>
            </div>
            <div className="ecosystem-item">
              <div className="ecosystem-icon">🎯</div>
              <h3>Marketing Agencies</h3>
              <p>Co-marketing and lead generation partnerships</p>
            </div>
            <div className="ecosystem-item">
              <div className="ecosystem-icon">⚙️</div>
              <h3>Service Providers</h3>
              <p>Complementary services for bundled solutions</p>
            </div>
            <div className="ecosystem-item">
              <div className="ecosystem-icon">🏭</div>
              <h3>Industry Consortiums</h3>
              <p>Collaborative ventures and alliances</p>
            </div>
            <div className="ecosystem-item">
              <div className="ecosystem-icon">🌟</div>
              <h3>Strategic Alliances</h3>
              <p>Long-term partnerships for innovation</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="partnerships-cta">
          <div className="cta-box">
            <h2 className="cta-title">
              Leverage the Power of Partnerships to Accelerate Your Growth Journey
            </h2>
            <p className="cta-text">
              Let's explore how strategic partnerships can unlock new opportunities and drive 
              sustainable growth for your business.
            </p>
            <button 
              className="cta-button"
              onClick={() => window.location.href = '/contact?service=partnerships'}
            >
              Contact Us for a Partnership Strategy Session
            </button>
            <p className="cta-note">
              🤝 Free consultation to identify your best partnership opportunities
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PartnershipsService;
