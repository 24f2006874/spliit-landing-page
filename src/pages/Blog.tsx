import { ArrowUpRight, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

const blogPosts = [
  { id: "01", title: "Unlock Smarter Sharing — From Routes to Daily Costs", excerpt: "A comprehensive manual on finding matched routes, connecting with verified commuters, and Spllitting costs with zero friction.", date: "JAN 2025", author: "SPL_TEAM", category: "TUTORIAL", image: "/smarter-sharing.png" },
  { id: "02", title: "Understanding Shared Economics", excerpt: "Analyzing the math behind collective transit and personal liquidity in modern urban environments.", date: "JAN 2025", author: "ECON_LAB", category: "ANALYSIS", image: "/currency.png" },
  { id: "03", title: "Safety Protocols & Trust Nodes", excerpt: "How multi-layer verification and encrypted deposits protect every shared journey within the network.", date: "JAN 2025", author: "SEC_UNIT", category: "SAFETY", image: "/safety.png" },
  { id: "04", title: "Group Travel Infrastructure", excerpt: "Organizing shared routes, inviting verified commuters, and tracking collective savings in one place.", date: "JAN 2025", author: "OPS_TEAM", category: "GUIDES", image: "/group-travel.png" },
  { id: "05", title: "Spllit vs Solo: The Efficiency Gap", excerpt: "A data-driven comparison of modern commuting methods and their impact on long-term sustainability.", date: "JAN 2025", author: "RESEARCH", category: "COMPARISON", image: "/split.png" },
  { id: "06", title: "Cost Reduction Strategies", excerpt: "Mastering smart timing and route-splitting techniques to maximize your daily travel dividends.", date: "JAN 2025", author: "TIPS_DEPT", category: "TIPS", image: "/cost.png" },
  { id: "07", title: "Core Mobile App Features", excerpt: "Deep dive into the proprietary tools built for secure route matching and automated expense distribution.", date: "JAN 2025", author: "DEV_CORE", category: "FEATURES", image: "/mobile-features.png" },
  { id: "08", title: "Top 10 Global Saving Methods", excerpt: "Maximize your travel budget with shared expense frameworks used by high-efficiency commuters.", date: "JAN 2025", author: "TRAVEL_OPS", category: "TRAVEL", image: "/ten.png" },
]

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - SPLLIT</title>
        <meta name="description" content="Read the latest insights, tutorials, and research on shared mobility and efficient commuting." />
      </Helmet>
      <main className="min-h-screen bg-white text-[#09090B] selection:bg-blue-600 selection:text-white">
        <Header />

        {/* 1. CINEMATIC HERO */}
        <section className="pt-48 pb-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="overflow-hidden mb-6">
              <span className="text-[10px] font-mono tracking-[0.5em] text-blue-600 font-bold uppercase block animate-in fade-in slide-in-from-bottom-full duration-700">
                Intelligence_Log
              </span>
            </div>
            <h1 className="text-6xl md:text-[85px] font-bold tracking-tight leading-[0.9] mb-12 animate-in fade-in slide-in-from-bottom-full duration-1000 ease-out">
              Perspectives on <br />
              <span className="text-slate-400">Shared Movement.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed animate-in fade-in duration-1000 delay-500">
              A curated index of research, tutorials, and protocols designed to optimize the
              economics of your daily commute.
            </p>
          </div>
        </section>

        {/* 2. SOPHISTICATED LIST REVEAL */}
        <section className="pb-40 px-6">
          <div className="max-w-[1200px] mx-auto border-t border-zinc-100">
            {blogPosts.map((post) => (
              // Entire article is now wrapped in a Link for high usability
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block group"
              >
                <article className="relative grid md:grid-cols-12 gap-8 py-16 border-b border-zinc-100 transition-all duration-700 hover:bg-[#FAFAFA] cursor-pointer">
                  {/* Index Column */}
                  <div className="md:col-span-1 hidden md:block">
                    <span className="text-sm font-mono text-zinc-200 group-hover:text-blue-600 transition-colors duration-500 font-bold">
                      {post.id}
                    </span>
                  </div>

                  {/* Main Content Column */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                        {post.category}
                      </span>
                      <div className="h-[1px] w-8 bg-zinc-200 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-700" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-700">
                      {post.title}
                    </h2>

                    <p className="text-slate-500 text-lg leading-relaxed max-w-xl group-hover:text-slate-900 transition-colors duration-500">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 pt-4 text-[10px] font-mono text-zinc-400">
                      <span className="flex items-center gap-2"><Calendar size={12}/> {post.date}</span>
                      <span className="flex items-center gap-2 font-bold text-zinc-200 group-hover:text-zinc-400 transition-colors">BY_{post.author}</span>
                    </div>
                  </div>

                  {/* Image Preview Column */}
                  <div className="md:col-span-4 relative flex items-center justify-end">
                    <div className="relative w-full h-[240px] md:h-full md:aspect-[4/3] overflow-hidden transition-all duration-1000 ease-in-out">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 brightness-90 group-hover:brightness-100 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-700" />
                    </div>

                    {/* Float-out Arrow */}
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-700">
                      <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-full shadow-xl">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. MINIMALIST SYSTEM CALLOUT */}
        <section className="py-40 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
              Stay sync'd with <br /> the <span className="text-blue-600 italic">protocol.</span>
            </h2>
            <div className="max-w-md mx-auto flex flex-col gap-4">
              <input
                type="email"
                placeholder="NETWORK_IDENTIFIER@SPL.SYS"
                className="w-full bg-white border border-zinc-200 p-6 text-[10px] font-mono uppercase tracking-[0.3em] outline-none focus:border-blue-600 transition-all"
              />
              <button className="w-full bg-black text-white py-6 text-[10px] font-mono font-bold uppercase tracking-[0.4em] hover:bg-blue-600 transition-all duration-500">
                Initialize_Sync
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}