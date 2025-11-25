import './FeaturedInsights.css';

function FeaturedInsights() {
  const insights = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x250/1A2A6C/FFFFFF?text=Pricing+Strategy',
      title: 'The Future of SaaS Pricing: Value-Based Models',
      excerpt: 'Discover how value-based pricing can transform your SaaS business and increase customer satisfaction while maximizing revenue.',
      link: '/insights/1'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x250/00BFA6/FFFFFF?text=Partnerships',
      title: 'Building Strategic Partnerships That Drive Growth',
      excerpt: 'Learn the key principles for identifying and nurturing partnerships that accelerate business growth and market expansion.',
      link: '/insights/2'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x250/1A2A6C/FFFFFF?text=Leadership',
      title: 'Leadership Coaching: Unlocking Founder Potential',
      excerpt: 'How executive coaching helps founders overcome challenges, develop essential skills, and lead their teams to success.',
      link: '/insights/3'
    }
  ];

  return (
    <section className="featured-insights">
      <div className="insights-container">
        <h2 className="insights-title">Featured Insights</h2>
        <p className="insights-subtitle">
          Latest thinking on growth, strategy, and leadership
        </p>

        <div className="insights-grid">
          {insights.map((insight) => (
            <article key={insight.id} className="insight-card">
              <div className="insight-image">
                <img src={insight.image} alt={insight.title} />
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-excerpt">{insight.excerpt}</p>
                <a href={insight.link} className="insight-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="insights-cta">
          <a href="/insights" className="view-all-button">
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedInsights;
