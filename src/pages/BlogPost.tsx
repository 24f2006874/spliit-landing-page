import { useParams } from "react-router-dom"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowLeft, ShieldCheck, Zap, Share2, ChevronRight, Globe, Activity, Cpu, Database } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

// 1. BETA-PHASE DATABASE (₹ RUPEES & INITIAL METRICS)
const postData: Record<string, any> = {
  "01": {
    title: "Unlock Smarter Sharing",
    cat: "ONBOARDING", author: "SPL_CORE",
    img: "/smarter-sharing.png",
    color: "text-blue-500", bg: "bg-blue-500",
    next: "02", desc: "A first-look manual on finding matched routes and joining the initial network of verified commuters.",
    statLabel: "INITIAL_MATCH_RATE", statValue: "92%", icon: <Activity size={24}/>,
    detail: "Early testing shows 9 out of 10 users in pilot zones find compatible route matches during peak windows."
  },
  "02": {
    title: "Shared Economics",
    cat: "ECONOMY", author: "FIN_TEAM",
    img: "/currency.png",
    color: "text-emerald-500", bg: "bg-emerald-500",
    next: "03", desc: "Analyzing how collective transit nodes can preserve personal liquidity for Indian commuters.",
    statLabel: "POTENTIAL_SAVINGS", statValue: "₹4.5k+", icon: <Database size={24}/>,
    detail: "Beta users are projected to save upwards of ₹4,500 monthly by splitting fuel and toll costs across the network."
  },
  "03": {
    title: "Safety & Trust Nodes",
    cat: "SECURITY", author: "SEC_UNIT",
    img: "/safety.png",
    color: "text-red-500", bg: "bg-red-500",
    next: "04", desc: "Our multi-layer verification system designed to protect early adopters during the network rollout.",
    statLabel: "AUTH_PROTOCOL", statValue: "v1.0", icon: <ShieldCheck size={24}/>,
    detail: "Every initial node requires Aadhaar-linked verification and 256-bit encryption for all journey data."
  },
  "04": {
    title: "Travel Infrastructure",
    cat: "PLANNING", author: "OPS_TEAM",
    img: "/group-travel.png",
    color: "text-orange-500", bg: "bg-orange-500",
    next: "05", desc: "How to organize initial group routes and track collective savings as we build the grid.",
    statLabel: "PILOT_ZONES", statValue: "Active", icon: <Globe size={24}/>,
    detail: "Infrastructure is currently being stress-tested in Tier-1 cities to ensure 99.9% uptime during the public launch."
  },
  "05": {
    title: "The Efficiency Gap",
    cat: "RESEARCH", author: "DATA_LAB",
    img: "/split.png",
    color: "text-purple-500", bg: "bg-purple-500",
    next: "06", desc: "Comparing solo-commuting costs in India against our distributed route-sharing model.",
    statLabel: "FUEL_EFFICIENCY", statValue: "+38%", icon: <Activity size={24}/>,
    detail: "Initial research indicates shared occupancy can reduce individual fuel consumption by up to 38% per trip."
  },
  "06": {
    title: "Cost Reduction",
    cat: "TIPS", author: "USER_OPS",
    img: "/cost.png",
    color: "text-cyan-500", bg: "bg-cyan-500",
    next: "07", desc: "Techniques for maximizing your travel dividends during the platform's early access phase.",
    statLabel: "DAILY_DIVIDEND", statValue: "₹150+", icon: <Zap size={24}/>,
    detail: "Smart route-timing can save users an average of ₹150 per day on high-traffic corridors."
  },
  "07": {
    title: "Core App Features",
    cat: "SYSTEM", author: "DEV_CORE",
    img: "/mobile-features.png",
    color: "text-yellow-500", bg: "bg-yellow-500",
    next: "08", desc: "A deep dive into the secure route matching tools available in our MVP (Minimum Viable Product).",
    statLabel: "SYSTEM_LATENCY", statValue: "48ms", icon: <Cpu size={24}/>,
    detail: "Optimized server responses ensure match notifications reach devices in under 50 milliseconds."
  },
  "08": {
    title: "Global Saving Methods",
    cat: "STRATEGY", author: "GROWTH",
    img: "/ten.png",
    color: "text-pink-500", bg: "bg-pink-500",
    next: "01", desc: "Shared expense frameworks we are adapting for the Indian market to maximize user value.",
    statLabel: "EXPANSION_NODE", statValue: "Phase_1", icon: <Globe size={24}/>,
    detail: "Our roadmap targets 15 major Indian tech hubs for total network integration by Q4 2025."
  },
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const post = postData[id || "01"] || postData["01"]
  const nextPost = postData[post.next]

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const [isBooting, setIsBooting] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 500)
    return () => clearTimeout(timer)
  }, [id])

  if (isBooting) {
    return <div className="h-screen bg-[#09090B] flex items-center justify-center font-mono text-[10px] tracking-[0.5em] text-zinc-600 uppercase">INITIALIZING_BETA_NODE_{id}...</div>
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - SPLLIT Blog</title>
        <meta name="description" content={post.desc} />
      </Helmet>
      <main className="min-h-screen bg-[#09090B] text-white selection:bg-white selection:text-black">
        <Header />
        <motion.div className={`fixed top-0 left-0 right-0 h-[2px] ${post.bg} z-[100] origin-left`} style={{ scaleX }} />

        {/* HERO SECTION */}
        <section className="relative h-[70vh] flex items-end px-6 pb-20 overflow-hidden border-b border-white/5">
          <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
            <img src={post.img} alt="" className="w-full h-full object-cover opacity-40 grayscale-[0.3]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
          </motion.div>

          <div className="max-w-[1200px] mx-auto w-full relative z-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-10 group transition-all text-[10px] font-mono tracking-widest uppercase">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              System_Index
            </Link>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <span className={`text-[10px] font-mono font-bold tracking-[0.4em] uppercase ${post.color} mb-4 block`}>
                BETA_LOG // {post.cat}
              </span>
              <h1 className="text-5xl md:text-[80px] font-bold tracking-tighter leading-[0.9] mb-10 max-w-4xl">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* CONTENT AREA */}
        <section className="max-w-[1200px] mx-auto px-6 py-24 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-2xl md:text-3xl text-zinc-100 leading-relaxed font-light mb-12 italic border-l border-white/20 pl-8">
                {post.desc}
              </p>

              <div className="prose prose-invert max-w-none text-zinc-400 text-lg md:text-xl leading-relaxed space-y-10">
                <p>
                  We are currently in the <strong>Initial Deployment Phase</strong> of the {post.title} framework.
                  As a first-generation protocol, we are prioritizing network stability and verified user trust
                  over mass-scale expansion. This ensure that every shared transit node maintains a high standard of reliability.
                </p>

                {/* PERSONALIZED STAT BOXES */}
                <div className="grid md:grid-cols-2 gap-6 py-8">
                  <div className="p-10 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                    <div className={`mb-6 ${post.color} group-hover:scale-110 transition-transform`}>
                      {post.icon}
                    </div>
                    <h4 className="text-white text-[10px] font-mono uppercase tracking-[0.3em] mb-4">{post.statLabel}</h4>
                    <p className="text-5xl font-bold tracking-tighter mb-4">{post.statValue}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{post.detail}</p>
                  </div>

                  <div className="p-10 bg-white/[0.02] border border-white/5 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-2 uppercase"><span>Launch_Readiness</span><span>94%</span></div>
                        <div className="h-[2px] w-full bg-white/5"><div className={`h-full ${post.bg} w-[94%] shadow-[0_0_10px_rgba(255,255,255,0.2)]`}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-2 uppercase"><span>Beta_Sync</span><span>ACTIVE</span></div>
                        <div className="h-[2px] w-full bg-white/5"><div className={`h-full ${post.bg} w-[100%] opacity-50`}></div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  By joining during this early stage, you are helping build the data foundation for future efficiency.
                  We invite all early participants to provide feedback through our encrypted channels as we optimize
                  the {id} protocol for wider public release.
                </p>
              </div>
            </motion.div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
                 <div className={`absolute top-0 left-0 w-full h-[1px] ${post.bg} opacity-30 group-hover:opacity-100 transition-opacity`} />
                 <p className="text-[10px] font-mono text-zinc-600 uppercase mb-8">Node_Options</p>
                 <button className="w-full flex items-center justify-between p-5 border border-white/10 hover:bg-white hover:text-black transition-all group/btn">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest">Share_Protocol</span>
                    <Share2 size={14} />
                 </button>
              </div>
            </div>
          </aside>
        </section>

        {/* NEXT LOG */}
        <section className="pb-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <Link to={`/blog/${post.next}`} className="group block relative border-t border-white/5 pt-16 hover:bg-white/[0.01] transition-colors p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-3">
                  <span className="text-[9px] font-mono text-zinc-600 tracking-[0.5em] uppercase">Next_Beta_Log</span>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter group-hover:translate-x-3 transition-transform duration-500">
                    {nextPost.title}
                  </h3>
                </div>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}