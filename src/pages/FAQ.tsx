import { Helmet } from 'react-helmet-async'
import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import Header from '../components/Header'
import Footer from '../components/Footer'

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is SPLLIT?",
        a: "SPLLIT is a smart ride-sharing platform that helps people find trusted co-travellers, split travel costs, and enjoy safer, more affordable trips.",
      },
      {
        q: "How do I create an account?",
        a: "Download the SPLLIT app, sign up using your phone number or email, complete quick verification, and start finding or creating rides instantly.",
      },
      {
        q: "Is SPLLIT available in my city?",
        a: "SPLLIT is rolling out city by city. If your location isn't active yet, you can join the waitlist and get early access when we launch.",
      },
    ],
  },
  {
    category: "Transfers & Payments",
    questions: [
      {
        q: "How long does it take to find a ride match?",
        a: "Most users get a match within minutes based on route, timing, and trust score. In low-traffic areas, it may take slightly longer.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. SPLLIT has zero hidden charges. You only pay your share of the ride cost, shown clearly before confirmation.",
      },
    ],
  },
  {
    category: "Security & Safety",
    questions: [
      {
        q: "Is my information safe with SPLLIT?",
        a: "Yes. SPLLIT uses encryption, secure login, and multi-layer safety systems to protect your data and communication.",
      },
      {
        q: "How do you protect my personal information?",
        a: "We use strict privacy controls and never share personal details without your explicit permission.",
      },
    ],
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <>
      <Helmet>
        <title>FAQ - SPLLIT</title>
        <meta name="description" content="Frequently asked questions about SPLLIT - answers to common questions about our ride-sharing platform, pricing, safety, and more." />
      </Helmet>
      <main className="min-h-screen bg-[#FAFAFA] text-[#09090B]">
        <Header />

        {/* HERO */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-[1000px] mx-auto">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 font-bold block mb-6">
              Support
            </span>
            <h1 className="text-6xl md:text-[80px] font-bold tracking-tight leading-[0.95] mb-8">
              Frequently asked <br />
              <span className="text-slate-400">questions.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Clear answers to common questions about how SPLLIT works, pricing,
              safety, and access.
            </p>
          </div>
        </section>

        {/* FAQ CONTENT */}
        <section className="pb-32 px-6">
          <div className="max-w-[1000px] mx-auto space-y-20">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-sm font-mono uppercase tracking-[0.25em] text-slate-400 mb-10">
                  {section.category}
                </h2>

                <div className="divide-y divide-zinc-200 border-t border-zinc-200">
                  {section.questions.map((faq, idx) => {
                    const id = `${sectionIdx}-${idx}`
                    const isOpen = openIndex === id

                    return (
                      <div
                        key={id}
                        className="bg-white hover:bg-zinc-50 transition"
                      >
                        <button
                          onClick={() => toggle(id)}
                          className="w-full px-8 py-7 flex items-center justify-between text-left"
                        >
                          <h3 className="text-xl font-semibold text-zinc-900 max-w-[90%]">
                            {faq.q}
                          </h3>

                          <ChevronDown
                            size={22}
                            className={`text-blue-600 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-8 py-6 bg-[#F8F9FB] border-t border-zinc-200">
                            <p className="text-[17px] leading-relaxed text-zinc-800 max-w-[90%]">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STILL GOT QUESTIONS – ARCHITECTURAL CTA */}
        <section className="pb-40 px-6">
          <div className="max-w-[1000px] mx-auto border border-zinc-200 bg-white p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-3">
                Still got questions?
              </h3>
              <p className="text-slate-500 max-w-xl leading-relaxed">
                Our team is happy to help with anything not covered here — from
                onboarding to trust, safety, and partnerships.
              </p>
            </div>

            <a
              href="mailto:support@spllit.app"
              className="group inline-flex items-center gap-3 text-blue-600 font-semibold text-lg"
            >
              Contact support
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}