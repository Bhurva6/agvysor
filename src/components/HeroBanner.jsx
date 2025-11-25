import './HeroBanner.css';

function HeroBanner() {
  const handleCTAClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-headline">
          Agvysor: Empowering Startups & SMEs to Scale with Data-Driven Growth and Leadership
        </h1>
        <p className="hero-subheadline">
          Strategic Consulting in Business Development, Pricing, Partnerships, and Leadership Coaching.
        </p>
        <button className="hero-cta" onClick={handleCTAClick}>
          Request a Consultation
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;
