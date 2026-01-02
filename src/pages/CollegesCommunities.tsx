import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from "framer-motion"
import { ArrowLeft, Building2, GraduationCap, Home, PartyPopper, Users2, CheckCircle2, Globe } from "lucide-react"
import { Link } from "react-router-dom"

export default function CollegesCommunities() {
  const benefits = [
    "Reduce employee travel costs",
    "Improve safety for late-night workers",
    "Reduce parking & traffic load",
    "Eco-friendly mobility initiative",
    "Build internal trust & collaboration",
  ]

  const orgTypes = [
    {
      title: "Corporate Teams",
      description: "Reduce commute costs and boost employee satisfaction with domain-locked matching.",
      icon: <Building2 size={24} />,
      id: "ORG_01"
    },
    {
      title: "Universities",
      description: "Safe, affordable transportation for students within verified campus networks.",
      icon: <GraduationCap size={24} />,
      id: "ORG_02"
    },
    {
      title: "Hostels & Residences",
      description: "Connect residents with verified neighbors for hyper-local community trust.",
      icon: <Home size={24} />,
      id: "ORG_03"
    },
    {
      title: "Event Communities",
      description: "Organize high-capacity group transportation effortlessly for large-scale gatherings.",
      icon: <PartyPopper size={24} />,
      id: "ORG_04"
    },
  ]

  return (
    <>
      <Helmet>
        <title>Colleges & Communities - SPLLIT</title>
        <meta name="description" content="Smart mobility solutions for organizations, universities, and communities with domain-specific transit networks." />
      </Helmet>
      <main className="min-h-screen bg-[#F9FBFF] text-zinc-900">
        <Header />

        {/* HERO SECTION - INNOVATION BLUE */}
        <section className="relative pt-32 pb-24 px-6 border-b border-blue-100 bg-gradient-to-b from-blue-50/50 to-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <Link to="/" className="group inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-12 text-zinc-400 hover:text-blue-600 transition-colors">
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
                <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase mb-4 block">
                  Network_Expansion // Community
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                  Smart Mobility <br />
                  <span className="text-blue-600">For Your</span> <br />
                  Organization.
                </h1>

                <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-lg mb-10">
                  Empower your workplace or campus with a domain-specific transit layer.
                  High-fidelity matching engineered for closed-loop trust networks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight text-zinc-600"
                    >
                      <CheckCircle2 size={16} className="text-blue-600" />
                      {benefit}
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10">
                    Onboard_Organization
                  </button>
                </div>
              </motion.div>

              {/* Right Side - Network Node Visual */}
              <motion.div
                className="lg:col-span-5 relative flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="absolute w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] animate-pulse" />

                <div className="relative w-full aspect-square max-w-[400px] bg-white rounded-[3rem] border border-blue-50 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Background Grid */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                       style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

                  {/* Visual Node Cluster */}
                  <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                          animate={{ y: [0, -15, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-blue-600/30"
                      >
                          <Users2 size={40} />
                      </motion.div>

                      {/* Pulsing Outer Ring */}
                      <div className="absolute inset-0 border-2 border-blue-100 rounded-full scale-[1.8] animate-ping opacity-20" />
                      <div className="absolute inset-0 border border-blue-50 rounded-full scale-[2.5]" />
                  </div>

                  {/* Tactical Status Tag */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-zinc-950 text-white px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                     <span className="text-[9px] font-black uppercase tracking-widest">Protocol: Node_Sync</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ORGANIZATION TYPES GRID */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-4">
                Architecture_of_Trust
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {orgTypes.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative overflow-hidden p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-blue-600/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.1)] layered-3d hover-3d-depth animate-rotate-in-3d"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background ID */}
                  <div className="absolute -top-4 -right-2 text-8xl font-black text-zinc-50 group-hover:text-blue-50 transition-colors duration-500 select-none pointer-events-none">
                    {item.id.split('_')[1]}
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 mb-8 shadow-sm">
                      {item.icon}
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <h3 className="text-[12px] font-black text-zinc-900 uppercase tracking-[0.2em]">
                          {item.title}
                      </h3>
                    </div>

                    <p className="text-base text-zinc-500 font-medium leading-relaxed max-w-sm group-hover:text-zinc-700 transition-colors">
                      {item.description}
                    </p>

                    <div className="mt-8 pt-8 border-t border-zinc-50 flex justify-between items-center">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Security: Domain_Verified</span>
                      <Globe size={16} className="text-zinc-200 group-hover:text-blue-600 transition-colors" />
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