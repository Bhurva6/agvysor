import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email) {
      // Handle newsletter signup here
      console.log('Newsletter signup:', email);
      setStatus('success');
      setEmail('');
      
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Ahead with Our Latest Insights</h2>
          <p className="newsletter-subtitle">
            Get expert tips on growth strategy, pricing, leadership, and partnerships delivered to your inbox.
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="newsletter-success">
              ✓ Thank you for subscribing! Check your inbox for confirmation.
            </p>
          )}

          <p className="newsletter-privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
