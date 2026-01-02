import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ShieldAlert, Users2, Leaf, Smartphone, ArrowRight } from "lucide-react"

export default function FeatureCards() {
  const features = [
    {
      id: "safety",
      title: "Safety_Protocol",
      description: "Encrypted verification & real-time monitoring",
      icon: <ShieldAlert className="w-12 h-12" />,
      link: "/safety",
      accent: "group-hover:text-red-500",
      border: "hover:border-red-500/50"
    },
    {
      id: "communities",
      title: "Network_Clusters",
      description: "Dedicated travel circles for verified institutions",
      icon: <Users2 className="w-12 h-12" />,
      link: "/colleges-communities",
      accent: "group-hover:text-blue-500",
      border: "hover:border-blue-500/50"
    },
    {
      id: "planet",
      title: "Carbon_Offset",
      description: "Quantifiable reduction in urban emissions",
      icon: <Leaf className="w-12 h-12" />,
      link: "/green-planet",
      accent: "group-hover:text-emerald-500",
      border: "hover:border-emerald-500/50"
    },
    {
      id: "split",
      title: "The_Split_UX",
      description: "Zero-latency fare distribution architecture",
      icon: <Smartphone className="w-12 h-12" />,
      link: "/spllit-experience",
      accent: "group-hover:text-purple-500",
      border: "hover:border-purple-500/50"
    },
  ]

  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER - SYSTEM STYLE */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4 block animate-slide-up">
            Core_Modules // 01
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter leading-none uppercase animate-slide-up animate-delay-200">
            Core_Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={feature.link} className="group block">
                <div className={`
                  relative flex items-center justify-between p-8 md:p-12
                  rounded-[2rem] bg-zinc-50 border border-zinc-100
                  transition-all duration-500 ease-out
                  hover:bg-white ${feature.border}
                  hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]
                  spllit-card-hover spllit-hover-lift animate-bounce-in animate-delay-${idx * 100}
                  layered-3d hover-3d-depth
                  ${feature.id === 'planet' ? 'eco-pulse' : ''}
                  ${feature.id === 'communities' ? 'animate-floating-cards' : ''}
                  ${feature.id === 'split' ? 'animate-pulse-3d' : ''}
                `}>

                  {/* ICON AREA */}
                  <div className={`
                    transition-all duration-500 text-zinc-400
                    group-hover:scale-110 group-hover:rotate-6 ${feature.accent}
                    animate-rotate-in animate-delay-${idx * 50}
                    ${feature.id === 'communities' ? 'animate-connect-pulse' : ''}
                    ${feature.id === 'planet' ? 'animate-eco-float' : ''}
                    ${feature.id === 'split' ? 'animate-heart-connect' : ''}
                  `}>
                    {feature.icon}
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="flex-1 ml-8 md:ml-12">
                    <h3 className="text-2xl md:text-4xl font-black text-zinc-900 tracking-tighter uppercase mb-2 group-hover:animate-shimmer animate-slide-up">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 text-sm md:text-lg font-medium tracking-tight animate-fade-in-up">
                      {feature.description}
                    </p>
                  </div>

                  {/* TACTICAL ARROW */}
                  <div className="hidden md:flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity animate-typewriter trust-indicator">
                      VIEW_DETAILS
                    </span>
                    <div className={`
                      w-14 h-14 flex items-center justify-center rounded-full
                      border border-zinc-200 transition-all duration-500
                      group-hover:translate-x-2 group-hover:bg-zinc-900 group-hover:text-white
                      spllit-glow-hover animate-shared-journey
                    `}>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
           <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
             System_Ready: Hover to expand module
           </p>
        </div>
      </div>
    </section>
  )
}