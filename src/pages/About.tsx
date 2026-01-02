import { motion } from "framer-motion"
import { Plus, Users, Shield, Zap } from "lucide-react"
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Professional Reveal
const fader = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - SPLLIT</title>
        <meta name="description" content="Learn about SPLLIT's mission to make shared travel safer and more affordable." />
      </Helmet>
      <main className="min-h-screen bg-[#FAFAFA] text-[#09090B] selection:bg-blue-100">
        <Header />

        {/* 1. HERO - ARCHITECTURAL LAYOUT */}
        <section className="pt-48 pb-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <motion.div {...fader}>
              <span className="text-[10px] font-mono tracking-[0.3em] text-blue-600 uppercase font-bold mb-6 block">
                Established 2024
              </span>
              <h1 className="text-6xl md:text-[90px] font-bold tracking-tight leading-[0.9] mb-12">
                The platform for <br />
                <span className="text-slate-400">modern transit.</span>
              </h1>
              <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed font-light">
                Spllit is an infrastructure company. We build the protocols and systems
                that turn empty car seats into a global, reliable transit network.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. CORE VALUES - 3 COLUMN CLEAN GRID */}
        <section className="border-y border-slate-200 bg-white">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 divide-x divide-slate-200">
            {[
              { icon: <Zap className="w-5 h-5" />, title: "Efficiency", text: "Optimizing routes with millisecond precision to reduce urban congestion." },
              { icon: <Shield className="w-5 h-5" />, title: "Trust", text: "Multi-layered verification systems built for enterprise-grade security." },
              { icon: <Users className="w-5 h-5" />, title: "Community", text: "Moving people together to create a more connected and sustainable world." }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fader}
                transition={{ delay: i * 0.1 }}
                className="p-12 md:p-16 hover:bg-slate-50 transition-colors group"
              >
                <div className="mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. THE "WHY" - SPLIT CONTENT */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-24 items-start">
            <motion.div {...fader} className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Why we exist</h2>
              <div className="h-1 w-12 bg-blue-600" />
            </motion.div>

            <motion.div {...fader} className="space-y-12 text-xl text-slate-500 font-light leading-relaxed">
              <p>
                Millions of people commute identical routes alone every day.
                This creates unnecessary cost, massive carbon emissions, and wasted time.
              </p>
              <p className="text-black font-normal">
                Spllit makes shared commuting feel natural. We match people by route and time,
                automating the logistics so you can focus on the journey.
              </p>
              <p>
                We focus on systems that work quietly, consistently, and at real-world scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. STATS - MINIMALIST STRIP */}
        <section className="py-24 bg-black text-white rounded-[2rem] mx-4 mb-32">
          <div className="max-w-[1200px] mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Countries", val: "0+" },
              { label: "Trips Shared", val: "0k" },
              { label: "Platform Fee", val: "0%" },
              { label: "Uptime", val: "00.00%" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-bold tracking-tighter mb-2">{s.val}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. TEAM - CLEAN ROW INTERFACE */}
        <section className="pb-48 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-[0.3em] mb-12">Leadership</h2>
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {[
                { name: "Ankit Raj Choudhari", role: "Founder & CEO" },
                { name: "Raunak Ratan", role: "CTO & Co-Founder" },
                { name: "Saurav Kumar", role: "Head of Operations" },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="group flex items-center justify-between py-10 transition-all cursor-default"
                >
                  <div>
                    <h4 className="text-2xl font-semibold tracking-tight">{member.name}</h4>
                    <p className="text-slate-500 font-mono text-xs mt-1">{member.role}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-6 h-6 text-blue-600 rotate-45" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        <Footer />
      </main>
    </>
  )
}