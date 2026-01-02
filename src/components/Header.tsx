import { Menu, X, Activity } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pt-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex justify-center">
        <nav className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-full px-6 sm:px-10 py-4 flex items-center justify-between shadow-2xl mx-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group transition-transform active:scale-95">
            <img
              src="/logo (2).png"
              alt="SPLLIT Logo"
              width={50}
              height={50}
              className="h-10 w-auto brightness-200"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[13px] font-bold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://chat.whatsapp.com/..."
              target="_blank"
              className="hidden md:flex items-center gap-2 bg-white hover:bg-blue-600 text-black hover:text-white px-6 py-2.5 rounded-full font-black text-[12px] uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95"
            >
              <Activity size={14} className="animate-pulse" />
              Join Community
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-2 bg-black/95 border border-white/10 rounded-[2rem] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-2xl font-bold text-white tracking-tight border-b border-white/5 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://chat.whatsapp.com/..."
              className="mt-4 bg-white text-black py-4 rounded-full font-black text-center uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  )
}