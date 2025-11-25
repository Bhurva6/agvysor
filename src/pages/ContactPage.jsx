import { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-header">Get In Touch</h1>
        <p className="contact-intro">
          Ready to accelerate your growth? Let's start a conversation.
        </p>

        <div className="contact-content">
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type *</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="business-development">Business Development</option>
                  <option value="pricing-strategy">Pricing Strategy</option>
                  <option value="leadership-coaching">Leadership Coaching</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your business and how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-box">
              <h3>📍 Office Address</h3>
              <p>
                123 Business Street<br />
                San Francisco, CA 94102<br />
                United States
              </p>
            </div>

            <div className="info-box">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="info-box">
              <h3>📧 Email</h3>
              <p>hello@agvysor.com</p>
            </div>

            <div className="info-box">
              <h3>🕒 Business Hours</h3>
              <p>
                Monday - Friday<br />
                9:00 AM - 6:00 PM PST
              </p>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019279470617!2d-122.41941708468186!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
