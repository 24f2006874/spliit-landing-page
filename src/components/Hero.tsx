import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Activity, ChevronRight } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-32 sm:pt-48 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%] bg-[radial-gradient(circle_at_center,_#E2E8F0_1px,_transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-3 px-5 py-2 bg-white border border-zinc-200 rounded-full mb-10 shadow-sm transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"} animate-bounce-in`}>
            <Activity size={14} className="text-purple-600 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-800 uppercase">
              Launching Soon in Chennai
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl sm:text-7xl lg:text-[100px] font-black text-zinc-900 mb-8 leading-[0.9] tracking-tighter transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-shimmer`}>
            SIMPLIFY YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-glow">EVERYDAY TRAVEL</span>
          </h1>

          {/* Description */}
          <p className={`text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"} animate-slide-up`}>
            Say goodbye to costly solo rides. Split fares instantly with verified co-travelers going the same route as you.
          </p>

          {/* CTA Button */}
          <div className={`flex justify-center transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-scale-in`}>
            <a href="mailto:hello@spllit.in?subject=Early Access Request" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white px-12 py-7 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 group shadow-xl border border-white/10 hover:animate-glow">
                Get Early Access
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* PHONE MOCKUPS */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center mb-24">
          <div className={`hidden lg:block absolute left-[10%] w-52 h-[420px] rounded-[3rem] border border-zinc-200 bg-white/80 backdrop-blur-sm p-2 shadow-xl transition-all duration-1000 delay-500 ${isLoaded ? "translate-x-0 opacity-60 rotate-[-15deg]" : "-translate-x-20 opacity-0"}`}>
            <img src="/mobile-app-interface-payment.jpg" alt="Interface" className="w-full h-full object-cover rounded-[2.5rem] opacity-80" />
          </div>

          <div className={`relative z-20 w-64 h-[520px] sm:w-80 sm:h-[600px] bg-zinc-900 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[10px] border-zinc-900 flex items-center justify-center overflow-hidden transition-all duration-1000 delay-300 ${isLoaded ? "scale-100 translate-y-0" : "scale-90 translate-y-20 opacity-0"}`}>
            <img src="/mobile-app-transfer-interface-blue.jpg" alt="Main Interface" className="w-full h-full object-cover" />
          </div>

          <div className={`hidden lg:block absolute right-[10%] w-52 h-[420px] rounded-[3rem] border border-zinc-200 bg-white/80 backdrop-blur-sm p-2 shadow-xl transition-all duration-1000 delay-500 ${isLoaded ? "translate-x-0 opacity-60 rotate-[15deg]" : "translate-x-20 opacity-0"}`}>
            <img src="/mobile-app-account-settings.jpg" alt="Settings" className="w-full h-full object-cover rounded-[2.5rem] opacity-80" />
          </div>
        </div>

        {/* INSTITUTION MARQUEE */}
        <div className="pt-16 border-t border-zinc-200">
          <p className="text-center text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
            Institutional_Verification_Nodes
          </p>

          <div className="marquee-container relative overflow-hidden h-12 flex items-center">
             <div className="marquee-content flex gap-20 sm:gap-40 whitespace-nowrap">
                {["IIT Delhi", "SarvamAI", "MongoDB", "IIT Madras", "IITM", "IIT Bombay", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT Jodhpur", "IIT Patna", "IIT Bhubaneswar", "IIT Gandhinagar", "IIT Ropar", "IIT Mandi", "IIT Indore", "IIT Tirupati", "IIT Palakkad", "IIT Bhilai", "IIT Dharwad", "IIT Jammu", "IIT Goa"].map((name) => (
                  <span key={name} className="text-2xl font-black text-zinc-300 hover:text-purple-600 transition-colors cursor-default tracking-tighter">
                    {name.toUpperCase()}
                  </span>
                ))}
                {["IIT Delhi", "SarvamAI", "MongoDB", "IIT Madras", "IITM", "IIT Bombay", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT Jodhpur", "IIT Patna", "IIT Bhubaneswar", "IIT Gandhinagar", "IIT Ropar", "IIT Mandi", "IIT Indore", "IIT Tirupati", "IIT Palakkad", "IIT Bhilai", "IIT Dharwad", "IIT Jammu", "IIT Goa"].map((name) => (
                  <span key={name + "2"} className="text-2xl font-black text-zinc-300 hover:text-purple-600 transition-colors cursor-default tracking-tighter">
                    {name.toUpperCase()}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}