import { Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with International Payments",
    excerpt: "Learn how to easily send and receive money across borders with our secure platform.",
    date: "Dec 20, 2024",
    author: "Ankit Raj",
    category: "Tutorial",
    image: "/international-payments.jpg",
  },
  {
    id: 2,
    title: "Understanding Currency Exchange Rates",
    excerpt: "A comprehensive guide to how currency exchange works and how to get the best rates.",
    date: "Dec 18, 2024",
    author: "Sarah Johnson",
    category: "Guide",
    image: "/currency-exchange.png",
  },
  {
    id: 3,
    title: "Security Best Practices for Online Transfers",
    excerpt: "Keep your transactions safe with our expert security recommendations.",
    date: "Dec 15, 2024",
    author: "Mike Chen",
    category: "Security",
    image: "/digital-security-abstract.png",
  },
  {
    id: 4,
    title: "How to Use SPLLIT for Business Payments",
    excerpt: "Streamline your business payments and track expenses effortlessly.",
    date: "Dec 12, 2024",
    author: "Emily Rodriguez",
    category: "Business",
    image: "/business-payments.jpg",
  },
  {
    id: 5,
    title: "SPLLIT vs Traditional Banks: A Comparison",
    excerpt: "Discover why modern fintech solutions outperform traditional banking.",
    date: "Dec 10, 2024",
    author: "James Wilson",
    category: "Comparison",
    image: "/fintech-comparison.jpg",
  },
  {
    id: 6,
    title: "Tips for Reducing International Transfer Fees",
    excerpt: "Smart strategies to minimize costs and maximize your money transfer efficiency.",
    date: "Dec 8, 2024",
    author: "Lisa Kumar",
    category: "Tips",
    image: "/transfer-fees.jpg",
  },
  {
    id: 7,
    title: "Mobile App Features You Should Know About",
    excerpt: "Explore all the powerful features available in our mobile application.",
    date: "Dec 5, 2024",
    author: "David Park",
    category: "Features",
    image: "/mobile-app-features.png",
  },
  {
    id: 8,
    title: "SPLLIT Success Stories: Customer Testimonials",
    excerpt: "Read how businesses and individuals are transforming their finances with SPLLIT.",
    date: "Dec 1, 2024",
    author: "Priya Singh",
    category: "Success",
    image: "/customer-success-team.png",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h2>
          <p className="text-lg text-gray-600">Stay updated with the latest tips, guides, and success stories</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer group"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-5">
                <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </div>

                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex flex-col gap-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}