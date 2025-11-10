export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <h1 className="text-4xl font-bold mb-2">About E-Shop</h1>
        <p className="text-lg">We provide the best electronics at unbeatable prices.</p>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-teal-600">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-8">
          E-Shop is a trusted online retailer offering high-quality electronic products 
          from top brands. Our goal is to make technology accessible and affordable to everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-700">Our Mission</h3>
            <p className="text-gray-700">
              To deliver innovative and reliable tech products that enhance daily life.
              We are dedicated to excellent service and long-term customer satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-700">Our Vision</h3>
            <p className="text-gray-700">
              To become the go-to destination for quality electronics and smart devices
              across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10 text-teal-700">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-cyan-700">Contact Information</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">📍 Address:</span>{" "}
                  123 Innovation Avenue, Pune, Maharashtra, India
                </li>
                <li>
                  <span className="font-semibold">📞 Phone:</span>{" "}
                  +91 98765 43210
                </li>
                <li>
                  <span className="font-semibold">📧 Email:</span>{" "}
                  support@eshop.com
                </li>
                <li>
                  <span className="font-semibold">🕓 Working Hours:</span>{" "}
                  Mon – Fri: 9 AM – 6 PM
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <form className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-cyan-700">
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-10 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <p className="text-lg font-medium">
          Have questions? We’d love to hear from you.
        </p>
      </section>
    </div>
  );
}
