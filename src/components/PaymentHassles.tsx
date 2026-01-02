import { ShieldCheck, Zap, Users, Wallet } from "lucide-react"
import { motion } from "framer-motion"

export default function PaymentHassles() {
  const features = [
    { text: "Smart route matching for travelers", icon: <Zap className="w-5 h-5" /> },
    { text: "Travel with verified riders only", icon: <ShieldCheck className="w-5 h-5" /> },
    { text: "Auto-split fare with transparency", icon: <Wallet className="w-5 h-5" /> },
    { text: "Save 30–60% on daily commute", icon: <Users className="w-5 h-5" /> },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-white overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* HEADER - CLEAN & BOLD */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
            Protocol_Efficiency // 01
          </span>
          <h2 className="text-5xl sm:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.9]">
            SAY GOODBYE TO <br />
            <span className="text-purple-600">SOLO TRAVEL COSTS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* FEATURE LIST - CLEAN HOVER ANIMATION */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex items-center gap-6 p-6 bg-white border border-zinc-100 rounded-2xl transition-all duration-300 hover:border-purple-200 hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.1)]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <span className="text-zinc-900 text-lg font-extrabold uppercase tracking-tight">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* VISUAL SIDE - FLOATING MOCKUP */}
          <div className="relative flex justify-center items-center">
            {/* Background Glow Decor */}
            <div className="absolute w-72 h-72 bg-purple-200/30 blur-[100px] rounded-full" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[400px] aspect-[4/5] bg-zinc-100 rounded-[3rem] p-4 shadow-2xl border border-zinc-200"
            >
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                <img
                  src="/mobile-wallet-transfer-app.jpg"
                  alt="Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TACTICAL STATUS BOX */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 text-white p-5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Status</span>
                </div>
                <p className="text-xs font-black tracking-widest uppercase">Encryption_Active</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}