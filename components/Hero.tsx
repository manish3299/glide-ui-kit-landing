export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4">
          Build with Micro-interactions
        </h2>
        <p className="text-lg mb-6 text-gray-600">
          A headless UI library with first-class accessibility & fluid
          animations powered by Framer Motion.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
