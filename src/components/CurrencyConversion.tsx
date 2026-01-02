import { ShieldCheck, Users, Target, Activity } from "lucide-react"
import { motion } from "framer-motion"

export default function CurrencyConversion() {
  const features = [
    { text: "MATCH ENGINE: ROUTE SIMILARITY", icon: <Target className="w-5 h-5" /> },
    { text: "SAFETY: WOMEN-ONLY & VERIFIED CIRCLES", icon: <ShieldCheck className="w-5 h-5" /> },
    { text: "IDENTITY: PROFESSIONAL PROFILES", icon: <Users className="w-5 h-5" /> },
    { text: "TELEMETRY: LIVE RIDE TRACKING", icon: <Activity className="w-5 h-5" /> },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-8 bg-zinc-50 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-4 block">
            Protocol_Matching // 02
          </span>
          <h2 className="text-5xl sm:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.9]">
            EFFORTLESSLY <br />
            <span className="text-indigo-600">MATCH WITH RIDERS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex items-center gap-6 p-6 bg-white border border-zinc-200 rounded-2xl transition-all duration-300 hover:border-indigo-200 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-100 text-zinc-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <span className="text-zinc-900 text-lg font-extrabold uppercase tracking-tight">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-indigo-200/40 blur-[100px] rounded-full" />

            {/* NEW ANIMATION: Subtle 3D Tilt + Floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
                rotateZ: [0, -1, 1, 0], // Subtle swaying side to side
                rotateX: [0, 2, -2, 0]  // Subtle forward/backward lean
              }}
              transition={{
                duration: 6, // Slower for a more "premium" feel
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-[400px] aspect-[4/5] bg-white rounded-[3rem] p-4 shadow-2xl border border-zinc-200 preserve-3d"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden shadow-inner">
                <img
                  src="/mobile-currency-conversion-interface.jpg"
                  alt="Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TACTICAL STATUS BOX */}
              <motion.div
                animate={{ x: [0, 5, 0] }} // Status box drifts slightly separate from phone
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-zinc-900 text-white p-5 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Status</span>
                </div>
                <p className="text-xs font-black tracking-widest uppercase">Matching_Engine_v2</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}