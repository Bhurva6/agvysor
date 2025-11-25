import './LeadershipCoaching.css';

function LeadershipCoaching() {
  const offerings = [
    {
      icon: '🎯',
      title: 'Executive Coaching',
      description: 'Tailored coaching programs designed specifically for the unique pressures and challenges of startup and SME environments'
    },
    {
      icon: '🧠',
      title: 'Strategic Thinking Development',
      description: 'Transition from reactive day-to-day management to proactive leadership with long-term strategic vision'
    },
    {
      icon: '💬',
      title: 'Enhanced Communication Skills',
      description: 'Master the art of inspiring vision, managing teams effectively, and engaging stakeholders with confidence'
    },
    {
      icon: '🧘',
      title: 'Emotional Regulation',
      description: 'Learn techniques for emotional regulation and stress management to thrive in high-pressure situations'
    },
    {
      icon: '👥',
      title: 'Delegation & Leadership Capacity',
      description: 'Build leadership capacity across your organization through effective delegation and team empowerment'
    }
  ];

  const benefits = [
    {
      icon: '🏢',
      title: 'Company Culture',
      description: 'Shape a positive, high-performing culture that attracts and retains top talent'
    },
    {
      icon: '🤝',
      title: 'Employee Engagement',
      description: 'Boost team motivation, productivity, and commitment to company goals'
    },
    {
      icon: '⚡',
      title: 'Decision Quality',
      description: 'Make better, faster decisions with clarity and confidence'
    },
    {
      icon: '📈',
      title: 'Scale with Agility',
      description: 'Navigate uncertainty and lead your venture through rapid growth phases'
    }
  ];

  const coachingAreas = [
    {
      area: 'Vision & Strategy',
      icon: '🔭',
      description: 'Clarify your vision and develop strategic roadmaps for sustainable growth'
    },
    {
      area: 'Team Leadership',
      icon: '👨‍👩‍👧‍👦',
      description: 'Build and lead high-performing teams with confidence and empathy'
    },
    {
      area: 'Conflict Resolution',
      icon: '🤲',
      description: 'Navigate difficult conversations and resolve team conflicts effectively'
    },
    {
      area: 'Time Management',
      icon: '⏰',
      description: 'Optimize your time and energy for maximum impact and work-life balance'
    },
    {
      area: 'Fundraising Readiness',
      icon: '💰',
      description: 'Prepare mentally and strategically for investor meetings and fundraising'
    },
    {
      area: 'Personal Growth',
      icon: '🌱',
      description: 'Accelerate personal development to match your company\'s growth trajectory'
    }
  ];

  return (
    <div className="leadership-coaching-page">
      <div className="leadership-container">
        {/* Hero Section */}
        <section className="leadership-hero">
          <div className="hero-badge">Leadership Development</div>
          <h1 className="leadership-header">
            Leadership Coaching for Startup Founders & SME Leaders
          </h1>
          <p className="leadership-intro">
            <strong>Empowering Leaders to Scale with Confidence and Clarity</strong>
          </p>
          <p className="leadership-description">
            At Agvysor, we understand that strong leadership is the cornerstone of startup success 
            and sustainable growth. Our personalized coaching programs equip founders and leaders with 
            the skills, mindset, and emotional resilience needed to navigate complex challenges and 
            lead high-performing teams.
          </p>

          {/* Leadership Visual */}
          <div className="hero-visual">
            <div className="leadership-journey">
              <div className="journey-step">
                <div className="step-circle">🌱</div>
                <p>Founder</p>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-step">
                <div className="step-circle">📊</div>
                <p>Manager</p>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-step">
                <div className="step-circle">👔</div>
                <p>Leader</p>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-step highlighted">
                <div className="step-circle">👑</div>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="what-we-offer">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Comprehensive coaching programs tailored to your leadership journey
          </p>
          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <div key={index} className="offering-card">
                <div className="offering-icon">{offering.icon}</div>
                <h3 className="offering-title">{offering.title}</h3>
                <p className="offering-description">{offering.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coaching Areas */}
        <section className="coaching-areas">
          <h2 className="section-title">Key Coaching Areas</h2>
          <p className="section-subtitle">
            Focused development in critical leadership dimensions
          </p>
          <div className="areas-grid">
            {coachingAreas.map((item, index) => (
              <div key={index} className="area-card">
                <div className="area-icon">{item.icon}</div>
                <h3 className="area-title">{item.area}</h3>
                <p className="area-description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Leadership Coaching Matters */}
        <section className="why-coaching-matters">
          <div className="matter-content">
            <h2 className="section-title">Why Leadership Coaching Matters</h2>
            <p className="matter-text">
              Effective leadership directly impacts company culture, employee engagement, and 
              decision-making quality. Our coaching accelerates personal growth — turning founders 
              into confident CEOs ready to scale their ventures and navigate uncertainty with agility.
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

        {/* Real Impact / Testimonial */}
        <section className="leadership-impact">
          <div className="impact-card">
            <div className="impact-badge">Real Impact</div>
            <h3 className="impact-headline">
              Transforming Founders into Confident CEOs
            </h3>
            <blockquote className="impact-quote">
              "After six months of coaching with Agvysor, our founder improved team retention by 
              <strong> 30%</strong> and led successful fundraising rounds with greater clarity and focus."
            </blockquote>
            
            <div className="impact-metrics">
              <div className="metric-box">
                <div className="metric-value">30%</div>
                <div className="metric-label">Team Retention Improvement</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">6</div>
                <div className="metric-label">Months of Coaching</div>
              </div>
              <div className="metric-box">
                <div className="metric-icon">✨</div>
                <div className="metric-label">Successful Fundraising</div>
              </div>
            </div>

            <div className="impact-details">
              <h4>Coaching Focus Areas</h4>
              <ul>
                <li>Strategic leadership development and CEO mindset shift</li>
                <li>Effective team communication and conflict resolution</li>
                <li>Stress management and emotional intelligence</li>
                <li>Fundraising preparation and investor communication</li>
              </ul>
              
              <h4>Outcomes Achieved</h4>
              <ul>
                <li>Reduced employee turnover through improved leadership presence</li>
                <li>Successfully closed Series A funding with confident pitch delivery</li>
                <li>Built a strong leadership team through effective delegation</li>
                <li>Enhanced work-life balance and sustainable leadership practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coaching Process */}
        <section className="coaching-process">
          <h2 className="section-title">Our Coaching Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">1️⃣</div>
              <h3 className="step-title">Assessment</h3>
              <p className="step-description">
                Comprehensive evaluation of your leadership style, challenges, and growth areas
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">2️⃣</div>
              <h3 className="step-title">Goal Setting</h3>
              <p className="step-description">
                Define clear, measurable objectives aligned with your personal and business goals
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">3️⃣</div>
              <h3 className="step-title">Action & Practice</h3>
              <p className="step-description">
                Regular coaching sessions with practical tools and techniques to implement immediately
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-icon">4️⃣</div>
              <h3 className="step-title">Growth & Reflection</h3>
              <p className="step-description">
                Continuous feedback, accountability, and refinement to sustain long-term growth
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="leadership-cta">
          <div className="cta-box">
            <h2 className="cta-title">
              Take the Next Step in Your Leadership Journey
            </h2>
            <p className="cta-text">
              Unlock your leadership potential and drive your startup's growth with Agvysor's 
              expert coaching. Transform from founder to confident CEO ready to scale.
            </p>
            <button 
              className="cta-button"
              onClick={() => window.location.href = '/contact?service=leadership-coaching'}
            >
              Book a Leadership Coaching Consultation
            </button>
            <p className="cta-note">
              🎯 Free initial consultation to assess your leadership development needs
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LeadershipCoaching;
