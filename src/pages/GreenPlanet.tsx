import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { ArrowLeft, Leaf, Fuel, Wind, Volume2, Globe2, BarChart3 } from "lucide-react"

export default function GreenPlanetPage() {
  const impacts = [
    "Reduce carbon emissions per person",
    "Drastic fuel consumption drop",
    "Optimized city congestion relief",
    "Acoustic & road pollution reduction",
  ]

  const stats = [
    { stat: "50%", desc: "CO2 Reduction per node", icon: <Wind size={20} /> },
    { stat: "40%", desc: "Fuel efficiency gain", icon: <Fuel size={20} /> },
    { stat: "35%", desc: "Traffic load reduction", icon: <BarChart3 size={20} /> },
    { stat: "60%", desc: "Noise level mitigation", icon: <Volume2 size={20} /> },
  ]

  return (
    <>
      <Helmet>
        <title>Green Planet - SPLLIT</title>
        <meta name="description" content="Discover how SPLLIT contributes to a sustainable planet with eco-friendly transportation solutions." />
      </Helmet>
      <main className="min-h-screen bg-[#FBFDFB] text-zinc-900">
        <Header />

        {/* HERO SECTION - ECO-INNOVATION */}
        <section className="relative pt-32 pb-24 px-6 border-b border-green-100 bg-gradient-to-b from-green-50/50 to-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <Link to="/" className="group inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-12 text-zinc-400 hover:text-green-600 transition-colors">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
              Return_to_Home
            </Link>

            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] font-black tracking-[0.4em] text-green-600 uppercase mb-4 block">
                  Sustainability_Layer // v1.0
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                  Good for the <br />
                  <span className="text-green-600">Planet</span>, Better <br />
                  for the City.
                </h1>
                
                <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-lg mb-10">
                  Shared rides are the heartbeat of a breathing city. Every Spllit coordinate is 
                  optimized to minimize environmental friction while maximizing transit utility.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {impacts.map((impact, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight text-zinc-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {impact}
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-900/10">
                    Live_Impact_Dashboard
                  </button>
                </div>
              </motion.div>

              {/* Right Side - Bio-Tech Visual */}
              <motion.div 
                className="lg:col-span-5 relative flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* Green Glow Aura */}
                <div className="absolute w-[500px] h-[500px] bg-green-400/10 rounded-full blur-[100px] animate-pulse" />
                
                <div className="relative w-full aspect-square max-w-[420px] bg-white rounded-[3rem] border border-green-50 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Tactical Topographic Grid */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                       style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #16a34a 1px, transparent 0)`, backgroundSize: '30px 30px' }} />
                  
                  {/* Visual Eco-Core */}
                  <div className="relative z-10 flex flex-col items-center">
                      <motion.div 
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="w-28 h-28 bg-green-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-green-600/30 relative"
                      >
                          <Globe2 size={44} />
                          {/* Orbiting Leaf */}
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-green-600 border border-green-50"
                          >
                            <Leaf size={20} />
                          </motion.div>
                      </motion.div>
                      
                      {/* Pulsing Rings */}
                      <div className="absolute inset-0 border-2 border-green-100 rounded-full scale-[1.9] animate-ping opacity-20" />
                      <div className="absolute inset-0 border border-green-50 rounded-full scale-[2.4]" />
                  </div>

                  {/* Bottom Left Status Box */}
                  <div className="absolute bottom-8 left-8 bg-zinc-950/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white min-w-[160px]">
                     <div className="space-y-1 font-mono uppercase">
                        <p className="text-[8px] text-zinc-500 tracking-widest">Atmosphere_ID</p>
                        <p className="text-[10px] font-black text-green-400">CLEAN_AIR_SYNC</p>
                        <div className="h-[1px] w-full bg-white/10 my-1" />
                        <p className="text-[8px] text-zinc-500 tracking-widest">Protocol: Active</p>
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ENVIRONMENTAL IMPACT STATS */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-4">
                Impact_Metrics
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-green-600/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(22,163,74,0.08)]"
                >
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600 mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div className="text-5xl font-black text-zinc-900 group-hover:text-green-600 transition-colors mb-2 tracking-tighter">
                      {item.stat}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-400 group-hover:text-zinc-600 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Decorative Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-50 group-hover:bg-green-600 transition-all duration-500" />
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