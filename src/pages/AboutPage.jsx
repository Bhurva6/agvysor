import './AboutPage.css';

function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      title: 'Founder & CEO',
      image: 'https://via.placeholder.com/300x300/1A2A6C/FFFFFF?text=SJ',
      bio: 'With 15+ years in business development and strategy, Sarah has helped over 100 startups scale successfully.'
    },
    {
      name: 'Michael Chen',
      title: 'Head of Pricing Strategy',
      image: 'https://via.placeholder.com/300x300/00BFA6/FFFFFF?text=MC',
      bio: 'Former pricing director at Fortune 500 SaaS companies, Michael brings deep expertise in revenue optimization.'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Leadership Coach',
      image: 'https://via.placeholder.com/300x300/1A2A6C/FFFFFF?text=ER',
      bio: 'Certified executive coach with a passion for helping founders unlock their leadership potential.'
    },
    {
      name: 'David Thompson',
      title: 'Partnership Strategist',
      image: 'https://via.placeholder.com/300x300/00BFA6/FFFFFF?text=DT',
      bio: 'Expert in building strategic alliances, David has facilitated partnerships generating $50M+ in revenue.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <section className="mission-section">
          <h1 className="about-header">About Agvysor</h1>
          <div className="mission-vision">
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                To empower startups and SMEs with data-driven strategies and leadership coaching 
                that unlock sustainable growth and competitive advantage.
              </p>
            </div>
            <div className="vision-box">
              <h2>Our Vision</h2>
              <p>
                To be the trusted growth partner for visionary founders building the next generation 
                of impactful businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Our Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="methodology-section">
          <h2 className="section-title">Our Methodology</h2>
          <div className="methodology-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Discovery & Assessment</h3>
              <p>
                We start by deeply understanding your business, challenges, and growth goals 
                through comprehensive discovery sessions.
              </p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Strategy Development</h3>
              <p>
                Using data-driven insights, we craft customized strategies tailored to your 
                unique market position and objectives.
              </p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Implementation Support</h3>
              <p>
                We work alongside your team to execute the strategy, providing hands-on support 
                and course corrections as needed.
              </p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Measure & Optimize</h3>
              <p>
                Continuous monitoring and optimization ensure sustained results and adaptation 
                to market dynamics.
              </p>
            </div>
          </div>
        </section>

        <section className="careers-section">
          <div className="careers-box">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented consultants and coaches who share our passion 
              for helping businesses grow. Explore career opportunities with Agvysor.
            </p>
            <button className="careers-button">View Open Positions</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
