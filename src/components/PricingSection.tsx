import { Check, X } from "lucide-react"

const pricingPlans = [
  {
    name: "Student Plan",
    description: "Perfect for students and beginners",
    originalPrice: 19,
    discountedPrice: 1,
    discount: "95%",
    features: [
      "Send up to ₹50,000/month",
      "Zero hidden fees",
      "Real-time exchange rates",
      "24/7 customer support",
      "Mobile app access",
      "Multi-currency wallet",
    ],
    notIncluded: ["Priority support", "API access", "Advanced analytics"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Corporate Plan",
    description: "For businesses and enterprises",
    originalPrice: 19,
    discountedPrice: 1,
    discount: "90%",
    features: [
      "Unlimited transactions",
      "Zero hidden fees",
      "Real-time exchange rates",
      "Priority 24/7 support",
      "Team management",
      "Advanced analytics",
      "API access",
      "Dedicated account manager",
    ],
    notIncluded: ["Custom integrations"],
    cta: "Start Free Trial",
    popular: true,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 animate-slide-up animate-delay-200">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 p-8 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-bounce-in animate-delay-${index * 200} ${
                plan.popular
                  ? "border-purple-600 bg-purple-50 shadow-lg scale-105 md:scale-100 lg:scale-105 animate-glow"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
            >
              {plan.popular && (
                <div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 animate-pulse-scale">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900 animate-typewriter">₹{plan.discountedPrice}</span>
                  <span className="text-sm text-gray-600">/day</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="line-through">₹{plan.originalPrice}</span>
                  <span className="ml-2 text-green-600 font-semibold animate-shimmer">{plan.discount} OFF</span>
                </p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 hover:scale-105 ${
                  plan.popular
                    ? "bg-purple-600 hover:bg-purple-700 text-white hover:animate-glow"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                <p className="font-semibold text-gray-900 text-sm">Included Features:</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 animate-slide-up animate-delay-${i * 50}">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5 animate-rotate-in" size={18} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}

                {plan.notIncluded.length > 0 && (
                  <>
                    <p className="font-semibold text-gray-600 text-sm pt-4">Not Included:</p>
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 animate-slide-up animate-delay-${i * 50}">
                        <X className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}