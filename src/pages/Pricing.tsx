import { useState } from "react"
import { ArrowRight, Minus, ArrowUpRight } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"

const pricingPlans = [
  {
    id: "01",
    category: "Entry Level",
    name: "Student Plan",
    price: 1,
    originalPrice: 19,
    discount: "95% OFF",
    description: "Perfect for students and individuals seeking a smarter way to move and split costs.",
    features: [
      "Monthly transfer limit: $2,500",
      "Zero hidden service fees",
      "Real-time currency conversion",
      "24/7 email support",
    ],
    cta: "Initialize Plan",
  },
  {
    id: "02",
    category: "Scale Infrastructure",
    name: "Corporate Plan",
    price: 1,
    originalPrice: 19,
    discount: "90% OFF",
    description: "Designed for high-frequency operations requiring priority access and full API support.",
    features: [
      "Unlimited monthly transfers",
      "Priority infrastructure access",
      "Full API & Webhook support",
      "Dedicated account manager",
      "Advanced reporting & analytics",
    ],
    cta: "Request Access",
    popular: true,
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"daily" | "weekly">("weekly")

  return (
    <>
      <Helmet>
        <title>Pricing - SPLLIT</title>
        <meta name="description" content="Simple, transparent pricing logic for SPLLIT's transportation solutions." />
      </Helmet>
      <main className="min-h-screen bg-[#FAFAFA] text-[#09090B] overflow-x-hidden">
        <Header />

        {/* HERO SECTION */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-[1000px] mx-auto">
            {/* Tag Reveal */}
            <div className="overflow-hidden mb-6">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 font-bold block animate-in fade-in slide-in-from-bottom-full duration-700">
                Economics
              </span>
            </div>

            {/* Title Reveal */}
            <div className="overflow-hidden mb-8">
              <h1 className="text-6xl md:text-[80px] font-bold tracking-tight leading-[0.95] animate-in fade-in slide-in-from-bottom-full duration-1000 ease-out animate-gentle-float">
                Simple, transparent <br />
                <span className="text-slate-400 animate-slide-up">pricing logic.</span>
              </h1>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <p className="text-xl text-slate-500 max-w-2xl leading-relaxed animate-in fade-in duration-1000 delay-300">
                Choose the perfect plan for your needs. No hidden variables, 
                just honest infrastructure built for your movement.
              </p>

              {/* Toggle Animation */}
              <div className="flex bg-zinc-100 p-1 border border-zinc-200 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
                {["daily", "weekly"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setBillingPeriod(period as any)}
                    className={`px-6 py-2 text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-500 ${
                      billingPeriod === period ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-black"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING GRID */}
        <section className="pb-32 px-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className="bg-white p-10 md:p-16 flex flex-col group transition-all duration-700 hover:bg-[#FDFDFD] relative overflow-hidden spllit-card-hover spllit-hover-lift animate-money-save layered-3d hover-3d-depth"
                >
                  {/* ID Counter Animation */}
                  <span className="absolute top-10 right-10 text-5xl font-mono text-zinc-100 group-hover:text-zinc-200 transition-colors duration-500">
                    {plan.id}
                  </span>

                  <div className="mb-12 space-y-4 relative z-10">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-600 font-bold">
                      {plan.category}
                    </span>
                    <h3 className="text-4xl font-bold tracking-tight">{plan.name}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg italic">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-16 relative z-10">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-7xl font-bold tracking-tighter transition-transform duration-500 group-hover:scale-105 origin-left animate-money-save">
                        ₹{plan.price}
                      </span>
                      <span className="text-slate-300 text-xl font-light">/ {billingPeriod.slice(0, -2)}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 border border-blue-100 bg-blue-50/50 px-3 py-1 animate-connect-pulse trust-indicator">
                      <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">
                        {plan.discount} SAVING
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6 mb-20 flex-grow relative z-10">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold border-b border-zinc-100 pb-2">
                      System Features
                    </p>
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-4 group/item">
                        <Minus size={14} className="text-blue-600 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:scale-x-150" />
                        <span className="text-sm font-medium text-zinc-600 tracking-tight transition-colors group-hover/item:text-black">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ARCHITECTURAL BUTTON WITH LIQUID FILL ANIMATION */}
                  <button className="relative w-full h-20 bg-black text-white group/btn overflow-hidden transition-transform active:scale-95 duration-300 spllit-glow-hover animate-gentle-bounce">
                    {/* The "Liquid" Fill */}
                    <div className="absolute inset-0 bg-blue-600 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover/btn:translate-y-0 animate-gentle-bounce" />
                    
                    <div className="relative z-10 flex items-center justify-between px-8">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                        {plan.cta}
                      </span>
                      <div className="overflow-hidden w-6 h-6">
                        <ArrowUpRight className="w-6 h-6 transition-all duration-500 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-45 animate-gentle-bounce" />
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CALLOUT - SCROLL REVEAL */}
        <section className="pb-40 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
          <div className="max-w-[1000px] mx-auto border border-zinc-200 bg-white p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 hover:shadow-2xl transition-shadow duration-700">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-3">
                Still got questions?
              </h3>
              <p className="text-slate-500 max-w-xl leading-relaxed">
                Our infrastructure team is happy to help with anything not covered here — from
                onboarding to customized API access for enterprise partners.
              </p>
            </div>

            <a
              href="mailto:support@spllit.app"
              className="group inline-flex items-center gap-3 text-blue-600 font-semibold text-lg"
            >
              <span className="relative">
                Contact support
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}