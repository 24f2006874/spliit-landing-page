import { MessageCircle, Clock } from "lucide-react"

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Download SPLLIT Today</h2>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed">
              Get instant access to seamless money transfers and international payments on the go. Available soon on iOS
              and Android.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-yellow-300" size={24} />
                <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wide">Coming Soon</span>
              </div>
              <p className="text-purple-100 text-sm">
                Our mobile app is coming soon. Be the first to know when we launch!
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <button
                disabled
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/30 hover:bg-black/40 text-white px-8 py-3 rounded-lg font-semibold transition opacity-50 cursor-not-allowed"
              >
                📱 App Store
              </button>
              <button
                disabled
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition opacity-50 cursor-not-allowed"
              >
                🎮 Play Store
              </button>
            </div>

            <div className="border-t border-purple-400 pt-8">
              <p className="text-purple-100 text-sm mb-4">Join our WhatsApp community for updates:</p>
              <a
                href="https://wa.me/919363793714"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Join WhatsApp Community
              </a>
              <p className="text-xs text-purple-200 mt-3">Get notified when the app launches</p>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center animate-float">
            <div className="w-64 h-96 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <Clock size={48} className="text-white/40 mx-auto mb-4" />
                <p className="text-white/60 text-sm font-medium">App Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}