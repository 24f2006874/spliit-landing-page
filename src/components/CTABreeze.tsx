import { ArrowRight, Zap } from "lucide-react"

export default function CTABreeze() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Make International Payments a Breeze with TransferFlow
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <Zap className="w-5 h-5" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Zap className="w-5 h-5" />
                  <span>Secure transactions</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Zap className="w-5 h-5" />
                  <span>Fast transfers</span>
                </div>
              </div>

              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
                Download Now <ArrowRight size={20} />
              </button>
            </div>

            <div className="h-96 sm:h-[450px] relative">
              <img
                src="/mobile-app-transfer-breeze.jpg"
                alt="TransferFlow app"
                className="rounded-3xl w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}