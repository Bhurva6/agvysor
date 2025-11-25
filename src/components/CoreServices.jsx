import './CoreServices.css';

function CoreServices() {
  const services = [
    {
      icon: '📈',
      title: 'Business Development & Growth Strategies',
      description: 'Identify customer segments, optimize acquisition channels, and build repeatable growth engines.',
      link: '/services/business-development'
    },
    {
      icon: '💰',
      title: 'Pricing Strategy & Revenue Optimization',
      description: 'Design value-based pricing models that maximize revenue and customer lifetime value.',
      link: '/services/pricing-strategy'
    },
    {
      icon: '🎯',
      title: 'Leadership Coaching for Founders',
      description: 'Executive coaching to help founders develop leadership skills and drive organizational success.',
      link: '/services/leadership-coaching'
    },
    {
      icon: '🤝',
      title: 'Collaboration & Partnership Models',
      description: 'Build strategic partnerships and alliances that accelerate growth and expand market reach.',
      link: '/services/partnerships'
    }
  ];

  return (
    <section className="core-services">
      <div className="services-container">
        <h2 className="services-title">Our Core Services</h2>
        <p className="services-subtitle">
          Comprehensive solutions to accelerate your business growth
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="service-link">
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <p className="services-footer-text">
            Interested in our pricing? View our transparent, flexible packages.
          </p>
          <a href="/pricing" className="services-pricing-link">
            View Pricing →
          </a>
        </div>
      </div>
    </section>
  );
}

export default CoreServices;
