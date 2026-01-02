import Header from "../components/Header"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { ArrowLeft, Target, CreditCard, MapPin, ShieldCheck, Lock, AlertOctagon, Smartphone, Cpu } from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function SplitExperiencePage() {
  const features = [
    "Smart route matching",
    "Live ride tracking",
    "One-tap fare split",
    "Verified identity badges",
    "Seamless payments",
    "Safety & SOS quick access",
  ]

  const showCase = [
    { title: "Smart Matching", desc: "Find riders going your exact way with AI-powered route matching.", icon: <Target size={24} />, id: "FEAT_01" },
    { title: "Instant Split", desc: "Auto-calculate and split fares with one-tap encrypted settlement.", icon: <CreditCard size={24} />, id: "FEAT_02" },
    { title: "Real-Time Tracking", desc: "High-fidelity GPS telemetry logs every coordinate of your journey.", icon: <MapPin size={24} />, id: "FEAT_03" },
    { title: "Verified Riders", desc: "Identity-vault verified community members only.", icon: <ShieldCheck size={24} />, id: "FEAT_04" },
    { title: "Safe Payments", desc: "PCI-compliant, end-to-end encrypted transaction layer.", icon: <Lock size={24} />, id: "FEAT_05" },
    { title: "Emergency Access", desc: "Zero-latency SOS packets sent directly to response nodes.", icon: <AlertOctagon size={24} />, id: "FEAT_06" },
  ]

  return (
    <>
      <Helmet>
        <title>SPLLIT Experience - SPLLIT</title>
        <meta name="description" content="Experience the SPLLIT platform - seamless ride sharing with smart matching, instant splits, and verified safety features." />
      </Helmet>
      <main className="min-h-screen bg-[#FDFBFF] text-zinc-900">
        <Header />

        {/* HERO SECTION - ELECTRIC PURPLE */}
        <section className="relative pt-32 pb-24 px-6 border-b border-purple-100 bg-gradient-to-b from-purple-50/50 to-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <Link to="/" className="group inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-12 text-zinc-400 hover:text-purple-600 transition-colors">
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
                <span className="text-[10px] font-black tracking-[0.4em] text-purple-600 uppercase mb-4 block">
                  User_Experience // OS.1
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                  The <span className="text-purple-600">Spllit</span> <br />
                  Interface of <br />
                  Tomorrow.
                </h1>
                
                <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-lg mb-10">
                  A seamless synthesis of speed and security. We've stripped away the friction 
                  of urban travel to provide a clean, tactical matching environment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight text-zinc-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl shadow-purple-900/10">
                    Pre_Register_Access
                  </button>
                </div>
              </motion.div>

              {/* Right Side - Interface Visual */}
              <motion.div 
                className="lg:col-span-5 relative flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="absolute w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] animate-pulse" />
                
                <div className="relative w-full aspect-square max-w-[400px] bg-zinc-900 rounded-[3rem] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Tech Grid Background */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" 
                       style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                  
                  {/* Visual Core */}
                  <div className="relative z-10 flex flex-col items-center">
                      <motion.div 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-white shadow-2xl"
                      >
                          <Smartphone size={40} />
                      </motion.div>
                      <div className="mt-6 flex flex-col items-center gap-1">
                        <div className="text-[10px] font-mono text-purple-400 font-bold tracking-widest uppercase">System_Load</div>
                        <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="h-full bg-purple-500"
                          />
                        </div>
                      </div>
                  </div>

                  {/* Tactical Overlays */}
                  <div className="absolute top-8 right-8 text-purple-500/50">
                     <Cpu size={40} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURE SHOWCASE GRID */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-4">
                Core_Infrastructure
              </h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {showCase.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-purple-600/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(147,51,234,0.08)] layered-3d hover-3d-depth animate-rotate-in-3d"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -top-4 -right-2 text-7xl font-black text-zinc-50 group-hover:text-purple-50 transition-colors duration-500 select-none pointer-events-none">
                    {item.id.split('_')[1]}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 mb-8">
                      {item.icon}
                    </div>
                    <h3 className="text-[11px] font-black text-zinc-900 uppercase tracking-[0.2em] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-700 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO PREVIEW - TACTICAL DARK */}
        <section className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-900/10 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black tracking-[0.4em] text-purple-500 uppercase mb-4 block">Visual_Data</span>
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase">See Spllit in Action</h2>
            </div>

            <div className="relative group cursor-pointer aspect-video bg-zinc-950 rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl hover-3d-depth layered-3d">
               <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80')] bg-cover bg-center" />
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-zinc-950 scale-100 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-current border-b-[10px] border-b-transparent ml-1" />
                  </div>
                  <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Launch_Experience_Teaser</p>
               </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}