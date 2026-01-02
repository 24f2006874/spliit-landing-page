import { TrendingUp, AlertCircle, Shield, Users, ArrowDownCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function MoneyTransfers() {
  const problems = [
    { icon: TrendingUp, text: "Rising fuel prices & inflation" },
    { icon: AlertCircle, text: "Heavy urban traffic congestion" },
    { icon: TrendingUp, text: "High individual commute expenses" },
    { icon: Shield, text: "Safety concerns for solo travelers" },
    { icon: Users, text: "Lack of trusted shared mobility" },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-white overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* HEADER - MATCHES YOUR PREVIOUS SECTIONS */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
            System_Audit // 00
          </span>
          <h2 className="text-5xl sm:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.9]">
            WHY <span className="text-red-600">SPLLIT EXISTS</span> <br />
            THE URBAN CRISIS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* PROBLEM LIST - SAME SLIDE-IN ANIMATION */}
          <div className="space-y-4">
             <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-2">Identify_Pain_Points</p>
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex items-center gap-6 p-6 bg-white border border-zinc-100 rounded-2xl transition-all duration-300 hover:border-red-200 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.1)]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <problem.icon className="w-5 h-5" />
                </div>
                <span className="text-zinc-900 text-lg font-extrabold uppercase tracking-tight">
                  {problem.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* VISUAL SIDE - FLOATING MOCKUP WITH RED ACCENTS */}
          <div className="relative flex justify-center items-center">
            {/* Red Glow Decor */}
            <div className="absolute w-72 h-72 bg-red-100/50 blur-[100px] rounded-full" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[400px] aspect-[4/5] bg-zinc-50 rounded-[3rem] p-4 shadow-2xl border border-zinc-200"
            >
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                <img
                  src="/mobile-seamless-transfers-interface.jpg"
                  alt="Urban Problem Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TACTICAL STATUS BOX - RED VARIANT */}
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 text-white p-5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Analysis</span>
                </div>
                <p className="text-xs font-black tracking-widest uppercase text-red-500">Inefficiency_Detected</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM CALLOUT BAR */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20 p-8 bg-zinc-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-2xl font-black text-white tracking-tight uppercase">
            Spllit solves all five — <span className="text-red-600">with one platform.</span>
          </p>
          <ArrowDownCircle className="w-10 h-10 text-red-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}