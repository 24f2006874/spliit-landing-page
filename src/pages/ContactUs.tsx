import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, Phone, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - SPLLIT</title>
        <meta name="description" content="Get in touch with SPLLIT. Have questions about our ride-sharing platform? Contact us via email, phone, or WhatsApp." />
      </Helmet>
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-purple-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins text-gray-900">Get in Touch</h1>
            <p className="text-xl text-gray-600">Have questions? We'd love to hear from you. Send us a message!</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-purple-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:ankitrajchoudhari@gmail.com"
                        className="text-gray-600 hover:text-purple-600 transition"
                      >
                        ankitrajchoudhari@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-purple-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:9363793714" className="text-gray-600 hover:text-purple-600 transition">
                        +91 9363793714
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageCircle className="text-green-500 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/919363793714"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Response Time</h3>
                  <p className="text-gray-600">
                    We typically respond to inquiries within 24 hours during business days. For urgent matters, please
                    reach out via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}