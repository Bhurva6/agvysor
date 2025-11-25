import { useState } from 'react';
import './InsightsPage.css';

function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'The Future of SaaS Pricing: Value-Based Models',
      date: 'November 20, 2025',
      category: 'pricing',
      image: 'https://via.placeholder.com/400x250/1A2A6C/FFFFFF?text=Pricing+Strategy',
      excerpt: 'Discover how value-based pricing can transform your SaaS business and increase customer satisfaction...'
    },
    {
      id: 2,
      title: 'Building Strategic Partnerships That Drive Growth',
      date: 'November 15, 2025',
      category: 'partnerships',
      image: 'https://via.placeholder.com/400x250/00BFA6/FFFFFF?text=Partnerships',
      excerpt: 'Learn the key principles for identifying and nurturing partnerships that accelerate business growth...'
    },
    {
      id: 3,
      title: 'Leadership Coaching: Unlocking Founder Potential',
      date: 'November 10, 2025',
      category: 'leadership',
      image: 'https://via.placeholder.com/400x250/1A2A6C/FFFFFF?text=Leadership',
      excerpt: 'How executive coaching helps founders overcome challenges and lead their teams to success...'
    },
    {
      id: 4,
      title: 'Data-Driven Customer Acquisition Strategies',
      date: 'November 5, 2025',
      category: 'business-development',
      image: 'https://via.placeholder.com/400x250/00BFA6/FFFFFF?text=Growth+Strategy',
      excerpt: 'Using analytics and data insights to optimize your customer acquisition funnel...'
    },
    {
      id: 5,
      title: 'Scaling from 0 to 100 Customers: A Playbook',
      date: 'October 28, 2025',
      category: 'business-development',
      image: 'https://via.placeholder.com/400x250/1A2A6C/FFFFFF?text=Scaling',
      excerpt: 'A step-by-step guide to finding product-market fit and scaling your early-stage startup...'
    },
    {
      id: 6,
      title: 'Revenue Optimization: Beyond Just Pricing',
      date: 'October 22, 2025',
      category: 'pricing',
      image: 'https://via.placeholder.com/400x250/00BFA6/FFFFFF?text=Revenue',
      excerpt: 'Explore the multiple levers for revenue optimization including packaging, upsells, and retention...'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'business-development', label: 'Business Development' },
    { id: 'pricing', label: 'Pricing Strategy' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'partnerships', label: 'Partnerships' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="insights-page">
      <div className="insights-container">
        <h1 className="insights-header">Insights & Resources</h1>
        <p className="insights-intro">
          Explore our latest thinking on business growth, pricing strategy, leadership, and partnerships.
        </p>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-content">
                <span className="article-date">{article.date}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <a href={`/insights/${article.id}`} className="read-more">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsightsPage;
