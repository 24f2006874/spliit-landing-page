import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"

export default function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - SPLLIT</title>
        <meta name="description" content="SPLLIT's terms of service outlining user agreements, use licenses, and legal conditions." />
      </Helmet>
      <main className="min-h-screen bg-white">
        <Header />

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins text-gray-900">Terms of Service</h1>
              <p className="text-xl text-gray-600">Last updated: November 2025</p>
            </div>

            <div
              className="prose prose-lg max-w-none space-y-8 text-gray-700 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the SPLLIT website and services, you accept and agree to be bound by and comply
                  with these terms and conditions. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  SPLLIT's website for personal, non-commercial transitory viewing only. This is the grant of a license,
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">3. Disclaimer</h2>
                <p>
                  The materials on SPLLIT's website are provided on an 'as is' basis. SPLLIT makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">4. Limitations</h2>
                <p>
                  In no event shall SPLLIT or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                  to use the materials on the SPLLIT website.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on SPLLIT's website could include technical, typographical, or photographic
                  errors. SPLLIT does not warrant that any of the materials on its website are accurate, complete, or
                  current.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">6. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  Email: ankitrajchoudhari@gmail.com
                  <br />
                  Phone: +91 9363793714
                </p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}