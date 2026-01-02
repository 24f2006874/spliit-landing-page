import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - SPLLIT</title>
        <meta name="description" content="SPLLIT's privacy policy explaining how we collect, use, and protect your information." />
      </Helmet>
      <main className="min-h-screen bg-white">
        <Header />

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins text-gray-900">Privacy Policy</h1>
              <p className="text-xl text-gray-600">Last updated: November 2025</p>
            </div>

            <div
              className="prose prose-lg max-w-none space-y-8 text-gray-700 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  SPLLIT ("we," "our," "us," or "Company") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you use our website and
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">2. Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the Site
                  includes:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Personal Data: Name, email address, phone number, account information</li>
                  <li>Financial Information: Bank account details, payment information</li>
                  <li>Device Information: IP address, browser type, operating system</li>
                  <li>Usage Data: Pages visited, time spent, clickstream data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">3. Use of Your Information</h2>
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                  experience.
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>To process your transactions and send related information</li>
                  <li>To improve our website and services</li>
                  <li>To respond to your inquiries and offer customer support</li>
                  <li>To send promotional emails and marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">4. Disclosure of Your Information</h2>
                <p>
                  We may share your information in the following situations: with service providers, business partners,
                  law enforcement when required, and in case of business transfers.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">5. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
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