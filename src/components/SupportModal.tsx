import { X, Mail, Phone, ShieldCheck, Activity } from "lucide-react" // Added Activity here
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SupportModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleSupportClick = () => setIsOpen(true)
    // Select all buttons with the class 'support-btn'
    const supportButtons = document.querySelectorAll(".support-btn")
    supportButtons.forEach((btn) => btn.addEventListener("click", handleSupportClick))

    return () => {
      supportButtons.forEach((btn) => btn.removeEventListener("click", handleSupportClick))
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-md"
          />

          {/* MODAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[2rem] shadow-2xl max-w-md w-full overflow-hidden border border-zinc-200"
          >
            {/* TACTICAL HEADER */}
            <div className="bg-zinc-900 px-8 py-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={120} className="text-white -rotate-12" />
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 mb-2 block">
                  Support_Interface // 04
                </span>
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                  Need <span className="text-purple-500">Assistance?</span>
                </h2>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* STATUS BAR */}
              <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-4 flex gap-4 items-center">
                <div className="relative flex items-center justify-center">
                  <Activity size={16} className="text-emerald-500 absolute animate-ping opacity-20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                </div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest leading-tight">
                  Team_Status: <span className="text-emerald-600">Online</span> <br />
                  Response_Time: <span className="text-zinc-900">~2 Hours</span>
                </p>
              </div>

              {/* CONTACT OPTIONS */}
              <div className="space-y-4">
                <a
                  href="mailto:ankitrajchoudhari@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 text-white group-hover:bg-purple-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Secure_Email</p>
                    <p className="text-sm font-bold text-zinc-900 break-all">ankitrajchoudhari@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:9363793714"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 text-white group-hover:bg-purple-600 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Direct_Line</p>
                    <p className="text-sm font-bold text-zinc-900">+91 9363793714</p>
                  </div>
                </a>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-3 pt-4">
                <button
                  onClick={() => (window.location.href = "mailto:ankitrajchoudhari@gmail.com")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(147,51,234,0.4)]"
                >
                  Initiate Support Ticket
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-colors"
                >
                  Terminate Session
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}