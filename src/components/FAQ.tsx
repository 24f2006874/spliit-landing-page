import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: "How does TransferFlow work?",
      a: "TransferFlow uses a secure platform to facilitate international money transfers. Simply create an account, add your payment method, and start sending money worldwide.",
    },
    {
      q: "Is it safe to transfer money?",
      a: "Yes, we use bank-level encryption and security protocols to protect your funds and personal information. Your money is always safe with us.",
    },
    {
      q: "How long do transfers take?",
      a: "Most transfers arrive within 24-48 hours. Some corridors may be faster. You can track your transfer in real-time through our app.",
    },
    {
      q: "What are your fees?",
      a: "We charge transparent, low fees starting from just 0.5%. No hidden fees. You'll always know exactly what you're paying.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">Got questions?</h2>
        <p className="text-center text-gray-600 mb-12">Find answers to common questions about TransferFlow</p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span className="font-semibold text-gray-900 text-left">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}