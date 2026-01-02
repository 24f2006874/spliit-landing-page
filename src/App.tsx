import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Careers from './pages/Careers'
import CollegesCommunities from './pages/CollegesCommunities'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import GreenPlanet from './pages/GreenPlanet'
import Pricing from './pages/Pricing'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Safety from './pages/Safety'
import SpllitExperience from './pages/SpllitExperience'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <>
      <Helmet>
        <title>SPLLIT</title>
        <meta name="description" content="Connect. Spllit. Save." />
        <meta name="keywords" content="split payments, event spllit, ride split, travel Split, Trip split, SPLLIT app" />
        <link rel="canonical" href="https://spllit.app" />
        <meta property="og:title" content="SPLLIT" />
        <meta property="og:description" content="Connect. Spllit. Save." />
        <meta property="og:url" content="https://spllit.app" />
        <meta property="og:site_name" content="SPLLIT" />
        <meta property="og:image" content="/spllit-logo.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SPLLIT",
            url: "https://spllit.app/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://spllit.app/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SPLLIT",
            url: "https://spllit.app/",
            logo: "https://spllit.app/spllit-logo.png",
            description: "SPLLIT helps people connect, ride together, split fares, and travel affordably.",
            founder: {
              "@type": "Person",
              name: "Ankit Raj Choudhari",
            },
            sameAs: [
              "https://instagram.com/spllitapp",
              "https://linkedin.com/company/spllit",
              "https://twitter.com/spllitapp",
            ],
          })}
        </script>
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/colleges-communities" element={<CollegesCommunities />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/green-planet" element={<GreenPlanet />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/spllit-experience" element={<SpllitExperience />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </>
  )
}

export default App

