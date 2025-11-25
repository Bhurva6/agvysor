import './AboutSnippet.css';

function AboutSnippet() {
  return (
    <section className="about-snippet">
      <div className="snippet-container">
        <div className="snippet-content">
          <h2 className="snippet-title">About Agvysor</h2>
          <p className="snippet-text">
            Agvysor partners with visionary leaders to unlock growth potential through 
            actionable insights and coaching. We combine deep expertise in business development, 
            pricing strategy, and leadership development to help startups and SMEs achieve 
            sustainable, scalable growth.
          </p>
          <a href="/about" className="snippet-link">
            Learn more about us →
          </a>
        </div>
        <div className="snippet-image">
          <img 
            src="https://via.placeholder.com/500x400/1A2A6C/FFFFFF?text=Team+Collaboration" 
            alt="Agvysor team collaboration" 
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSnippet;
