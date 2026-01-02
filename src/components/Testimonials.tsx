import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      content:
        "The best app I've used for international payments. It's completely transformed the way my family sends money.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      content: "No hidden fees, no surprises. The platform is so easy to use and transfers are super fast.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Business Owner",
      content: "I use TransferFlow for all my international payments. The rates are always fair and transparent.",
      rating: 5,
    },
    {
      name: "David Kumar",
      role: "Student",
      content: "As an international student, SPLLIT has made sending money home so much easier. No more bank fees eating into my allowance.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      content: "Finally, a payment app that understands the needs of small businesses. Fast, reliable, and cost-effective international transfers.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "Software Developer",
      content: "The API integration is seamless. I've integrated SPLLIT into my freelance platform and it's been a game changer for cross-border payments.",
      rating: 5,
    },
    {
      name: "Maria Gonzalez",
      role: "Retired Teacher",
      content: "I used to struggle with complicated banking apps. SPLLIT is so simple and intuitive. My grandchildren set it up for me!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "Restaurant Owner",
      content: "Managing payments for my international suppliers was a nightmare before SPLLIT. Now it's effortless and saves me hundreds monthly.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Digital Nomad",
      content: "Traveling the world while managing my freelance business has never been easier. SPLLIT handles all my international payment needs.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      role: "Import/Export Manager",
      content: "The currency conversion rates are unbeatable. SPLLIT has become essential for our international trade operations.",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      role: "Graduate Student",
      content: "Perfect for students like me who need to send money home regularly. The app is secure, fast, and incredibly user-friendly.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Real Estate Agent",
      content: "I handle international property transactions regularly. SPLLIT's reliability and speed give me peace of mind with every transfer.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 animate-slide-up">
          What Our Customers are Saying
        </h2>
        <p className="text-center text-gray-600 mb-16 animate-slide-up animate-delay-200">Join thousands of happy customers using TransferFlow</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={`bg-purple-50 rounded-2xl p-8 hover:bg-purple-100 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-bounce-in animate-delay-${(idx % 4) * 100}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 fill-purple-600 text-purple-600 animate-rotate-in animate-delay-${i * 50}`} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex-shrink-0 animate-scale-in">
                  <img
                    src="/avatar-profile.jpg"
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}