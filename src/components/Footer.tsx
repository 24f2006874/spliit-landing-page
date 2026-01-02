import { Facebook, Twitter, Linkedin, Instagram, MessageCircle, Mail, Phone, ArrowUpRight, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-zinc-400 py-20 px-4 sm:px-8 border-t border-zinc-900 overflow-hidden">
      {/* TACTICAL GRID OVERLAY (SUBTLE) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* BRAND BLOCK */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="w-32">
                <img
                  src="/spllit-logo.png"
                  alt="SPLLIT Logo"
                  width={120}
                  height={40}
                  className="brightness-0 invert object-contain"
                />
              </div>
              <p className="text-xs font-mono tracking-widest uppercase leading-relaxed text-zinc-500 max-w-xs">
                Making shared travel safer, smarter, and more affordable for everyone through p2p protocol.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 block">System_Node_Contact</span>
              <div className="space-y-3">
                <a href="mailto:support@spllit.app" className="flex items-center gap-3 group text-sm hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500 transition-colors">
                    <Mail size={14} />
                  </div>
                  <span className="font-bold tracking-tight">support@spllit.app</span>
                </a>
                <a href="tel:9363793714" className="flex items-center gap-3 group text-sm hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500 transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="font-bold tracking-tight">+91 9363793714</span>
                </a>
              </div>
            </div>
          </div>

          {/* LINK GROUPS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Product</h3>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-tighter">
                <li><Link to="/pricing" className="hover:text-purple-500 flex items-center gap-1 group">Pricing <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100" /></Link></li>
                <li><Link to="/blog" className="hover:text-purple-500 flex items-center gap-1 group">Journal <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100" /></Link></li>
                <li><Link to="#" className="hover:text-purple-500 flex items-center gap-1 group">Features <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100" /></Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Protocol</h3>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-tighter">
                <li><Link to="/about" className="hover:text-purple-500">About_Us</Link></li>
                <li><Link to="/careers" className="hover:text-purple-500">Node_Careers</Link></li>
                <li><Link to="/faq" className="hover:text-purple-500">Support_Docs</Link></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Network</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Facebook, href: "#", label: "FB" },
                  { icon: Twitter, href: "#", label: "TW" },
                  { icon: Linkedin, href: "#", label: "LI" },
                  { icon: Instagram, href: "https://www.instagram.com/spllit_official", label: "IG" },
                  { icon: MessageCircle, href: "https://chat.whatsapp.com/...", label: "WA" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 hover:text-white transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FINAL BAR */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck size={16} className="text-purple-500" />
            <p className="text-[10px] font-mono tracking-widest uppercase">
              Secure_Commute_Verified // 2025_Spllit_Systems
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-600">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy_Layer</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms_Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}