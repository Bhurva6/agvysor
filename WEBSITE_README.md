# Agvysor Website

A modern, professional consulting website for Agvysor - empowering startups and SMEs with data-driven growth strategies and leadership coaching.

## 🎨 Design System

### Colors
- **Primary Navy**: `#1A2A6C`
- **Primary Teal**: `#00BFA6`
- **Light Grey Background**: `#F8F9FA`
- **Text Colors**: `#333`, `#555`, `#666`

### Typography
- **Font Family**: Inter, Roboto, or system fonts
- **Professional, clean, and readable**

## 📁 Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx              # Main landing page
│   ├── BusinessDevelopment.jsx   # Service page example
│   ├── InsightsPage.jsx          # Blog/articles listing
│   ├── AboutPage.jsx             # About us page
│   └── ContactPage.jsx           # Contact form page
├── components/
│   ├── Header.jsx                # Navigation header
│   ├── Footer.jsx                # Site footer
│   ├── HeroBanner.jsx            # Hero section
│   ├── CoreServices.jsx          # Services overview
│   ├── FeaturedInsights.jsx      # Featured blog posts
│   ├── TestimonialsSlider.jsx    # Client testimonials carousel
│   ├── AboutSnippet.jsx          # About section snippet
│   └── Newsletter.jsx            # Newsletter signup form
├── App.jsx                       # Main app with routing
├── main.jsx                      # App entry point
└── index.css                     # Global styles
```

## 🚀 Features

### Homepage
- **Hero Banner**: Compelling headline with clear CTA
- **Core Services**: Icon-based cards for 4 main services
- **Featured Insights**: Latest 3 blog articles
- **Client Testimonials**: Auto-rotating carousel
- **About Snippet**: Brief company overview
- **Newsletter Signup**: Email capture form

### Service Pages
- **Business Development & Growth Strategies** (example implemented)
- Professional layout with benefits, case studies, and CTAs
- Easily replicable for other services

### Insights/Blog
- Filterable article grid
- Category-based navigation
- Clean, readable card layout

### About Page
- Mission & Vision statements
- Team member profiles with photos
- 4-step methodology explanation
- Careers section CTA

### Contact Page
- Professional contact form
- Office information
- Embedded Google Maps
- Multiple contact methods

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI**: Clean, professional aesthetic with smooth animations
- **SEO-Ready**: Semantic HTML structure
- **Fast Performance**: Optimized React components
- **Easy Navigation**: Intuitive routing with React Router
- **Professional Branding**: Consistent color scheme and typography

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Dependencies

- **React**: UI framework
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and dev server

## 🎨 Component Guidelines

### Adding New Service Pages
1. Copy `BusinessDevelopment.jsx` as a template
2. Update content (header, intro, benefits, case study)
3. Add route in `App.jsx`
4. Link from navigation and services section

### Adding Blog Articles
1. Add article data to `FeaturedInsights.jsx` or `InsightsPage.jsx`
2. Include: title, excerpt, image, date, category
3. Create individual article pages as needed

### Customization
- Update colors in `index.css` CSS variables
- Replace placeholder images with real photos
- Add real client logos and testimonials
- Connect forms to backend/email service

## 🌟 Best Practices

- All images use placeholder URLs - replace with real images
- Forms currently log to console - integrate with backend
- Social links in footer need real URLs
- Add Google Analytics or tracking as needed
- Test on multiple devices and browsers
- Optimize images before deployment

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔗 Navigation Structure

```
Home (/)
Services
  ├── Business Development (/services/business-development)
  ├── Pricing Strategy (/services/pricing-strategy)
  ├── Leadership Coaching (/services/leadership-coaching)
  └── Partnerships (/services/partnerships)
Insights (/insights)
About (/about)
Contact (/contact)
```

## 🎯 Next Steps

1. Replace placeholder images with professional photos
2. Add remaining service pages
3. Create individual blog article pages
4. Integrate contact form with email service
5. Add analytics tracking
6. Optimize for SEO (meta tags, descriptions)
7. Set up deployment pipeline
8. Add testimonials from real clients
9. Create case study detail pages
10. Add blog CMS integration (optional)

## 📄 License

© 2025 Agvysor. All rights reserved.
