import { useState, useEffect } from 'react';
import './TestimonialsSlider.css';

function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: 'TechStart Inc.',
      logo: 'https://via.placeholder.com/150x60/1A2A6C/FFFFFF?text=TechStart',
      text: 'Agvysor helped us identify our ideal customer profile and scale from $100K to $2M ARR in 18 months. Their strategic guidance was invaluable.',
      author: 'Sarah Chen, CEO'
    },
    {
      company: 'GrowthCo',
      logo: 'https://via.placeholder.com/150x60/00BFA6/FFFFFF?text=GrowthCo',
      text: 'The pricing strategy Agvysor developed increased our average deal size by 40% while improving customer satisfaction. Game-changing results!',
      author: 'Michael Rodriguez, Founder'
    },
    {
      company: 'ScaleUp Solutions',
      logo: 'https://via.placeholder.com/150x60/1A2A6C/FFFFFF?text=ScaleUp',
      text: 'Leadership coaching from Agvysor transformed how I lead my team. I\'m now more confident and effective as a CEO.',
      author: 'Jennifer Lee, CEO & Founder'
    }
  ];

  const clientLogos = [
    'https://via.placeholder.com/120x50/E0E0E0/666?text=Client+1',
    'https://via.placeholder.com/120x50/E0E0E0/666?text=Client+2',
    'https://via.placeholder.com/120x50/E0E0E0/666?text=Client+3',
    'https://via.placeholder.com/120x50/E0E0E0/666?text=Client+4',
    'https://via.placeholder.com/120x50/E0E0E0/666?text=Client+5',
    'https://via.placeholder.com/120x50/E0E0E0/666?text=Client+6'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Trusted by Growing Companies</h2>
        
        <div className="client-logos">
          {clientLogos.map((logo, index) => (
            <div key={index} className="client-logo">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-content">
                  <img src={testimonial.logo} alt={testimonial.company} className="testimonial-logo" />
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;
