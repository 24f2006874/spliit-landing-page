import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MessageCircle } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build scalable financial solutions with React, Node.js, and cloud technologies.",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Lead product strategy for our international payments platform.",
  },
  {
    id: 3,
    title: "Compliance Officer",
    department: "Legal & Compliance",
    location: "Remote",
    type: "Full-time",
    description: "Ensure regulatory compliance across 150+ countries.",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description: "Support our growing customer base and drive retention.",
  },
]

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers - SPLLIT</title>
        <meta name="description" content="Join the SPLLIT team and help revolutionize international payments and shared mobility." />
      </Helmet>
      <main className="min-h-screen bg-white">
        <Header />

 
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins">Join Our Team</h1>
            <p className="text-xl mb-8 text-purple-100">
              Help us revolutionize international payments and build the future of finance.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50 border-t-4 border-green-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Connect with our team and other talented individuals. Be part of our WhatsApp community for updates,
              discussions, and networking opportunities.
            </p>
            <a
              href="https://chat.whatsapp.com/demo-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 duration-300 shadow-lg"
            >
              <MessageCircle size={24} />
              Join Community on WhatsApp
            </a>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 mb-12 text-lg">Explore exciting opportunities to grow your career with SPLLIT.</p>

            <div className="space-y-6">
              {jobOpenings.map((job, idx) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up transform hover:scale-102"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">{job.title}</h3>
                      <p className="text-purple-600 font-semibold mb-3">{job.department}</p>
                    </div>
                    <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold text-sm">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <p className="text-sm text-gray-500">📍 {job.location}</p>
                    <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-purple-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-12 text-center">Why Join SPLLIT?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "🚀", title: "Impact", description: "Work on products used by millions globally" },
                { icon: "💡", title: "Innovation", description: "Push the boundaries of fintech" },
                { icon: "🌍", title: "Remote First", description: "Work from anywhere in the world" },
                { icon: "📈", title: "Growth", description: "Continuous learning and career development" },
                { icon: "💰", title: "Competitive Pay", description: "Market-competitive salaries and benefits" },
                { icon: "🤝", title: "Culture", description: "Diverse, inclusive, and collaborative team" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )

}
