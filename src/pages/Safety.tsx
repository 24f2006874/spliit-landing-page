import Header from "../components/Header"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Zap, Lock, Fingerprint, ArrowLeft, Activity, Car, Wifi } from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function SafetyPage() {
  const safetyProtocols = [
    {
      id: "01",
      title: "Identity_Vault",
      desc: "Biometric cross-referencing against government databases for every user node.",
      icon: <Fingerprint size={22} />,
      status: "Verified",
    },
    {
      id: "02",
      title: "Live_Telemetry",
      desc: "End-to-end encrypted GPS logging with 5-second interval heartbeat pings.",
      icon: <Activity size={22} />,
      status: "Active",
    },
    {
      id: "03",
      title: "Rapid_Signal",
      desc: "High-priority SOS packets that bypass standard network queues for instant alerts.",
      icon: <Zap size={22} />,
      status: "Standby",
    },
    {
      id: "04",
      title: "Cluster_Trust",
      desc: "Isolated travel lanes exclusive to verified corporate and university domains.",
      icon: <Lock size={22} />,
      status: "Secure",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Safety - SPLLIT</title>
        <meta name="description" content="Discover SPLLIT's comprehensive safety protocols and security measures for secure shared transportation." />
      </Helmet>
      <main className="min-h-screen bg-[#FFF9F9] text-zinc-900">
        <Header />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 px-6 border-b border-red-100 bg-gradient-to-b from-red-50/50 to-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <Link to="/" className="group inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-12 text-zinc-400 hover:text-red-600 transition-colors">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
              Return_to_Home
            </Link>

            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                className="lg:col-span-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] font-black tracking-[0.4em] text-red-600 uppercase mb-4 block">
                  Safety_Protocol // v2.0
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                  The New <br />
                  <span className="text-red-600">Standard</span> of <br />
                  Shared Trust.
                </h1>
                <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-md mb-10">
                  Effortlessly match with verified riders using our [1.0.9] tracking engine. 
                  A rigorous, high-fidelity verification stack built for precision.
                </p>
                
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-red-900/10">
                    Full_Audit_Report
                  </button>
                </div>
              </motion.div>

              {/* Right Side - Shield Visual (Black Boxes Removed) */}
              <motion.div 
                className="lg:col-span-6 relative flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* Background Aura */}
                <div className="absolute w-[500px] h-[400px] bg-red-400/20 rounded-full blur-[120px]" />
                
                {/* Main Shield Container */}
                <div className="relative w-full max-w-[520px] aspect-[16/11] bg-[#E98B81] rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center">
                  
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" 
                       style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />

                  {/* Central Shield Graphic */}
                  <div className="relative z-10">
                    <motion.div 
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Pulsing Outer Rings */}
                      <div className="absolute w-64 h-64 bg-white/20 rounded-full animate-ping opacity-20" />
                      <div className="absolute w-80 h-80 border border-white/10 rounded-full" />
                      
                      {/* Hexagonal Shield */}
                      <div className="w-44 h-52 bg-white flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative" 
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                         <div className="flex items-center gap-1.5 text-[#E98B81]">
                            <Wifi size={24} className="-rotate-90 opacity-40" />
                            <Car size={44} className="fill-[#E98B81]" />
                            <Wifi size={24} className="rotate-90 opacity-40" />
                         </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative Data Points (No Labels) */}
                  <div className="absolute inset-0 pointer-events-none">
                     {[...Array(12)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ opacity: [0.1, 0.4, 0.1] }}
                          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                        />
                     ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TACTICAL PROTOCOL BOXES */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-4">
                Security_Architecture
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {safetyProtocols.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-red-600/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(220,38,38,0.08)]"
                >
                  <div className="absolute -top-4 -right-2 text-8xl font-black text-zinc-50 group-hover:text-red-50 transition-colors duration-500 select-none pointer-events-none">
                    {item.id}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 mb-8 shadow-sm">
                      {item.icon}
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                         <h3 className="text-[11px] font-black text-zinc-900 uppercase tracking-[0.2em]">
                           {item.title}
                         </h3>
                      </div>
                      <p className="text-sm text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-700">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-zinc-50 flex justify-between items-center">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Status:</span>
                      <span className="text-[9px] font-black uppercase text-red-600 tracking-widest">{item.status}</span>
                    </div>
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