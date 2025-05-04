export function Features() {
  const features = [
    { title: "Headless", desc: "Style with Tailwind or any framework." },
    { title: "Framer Motion", desc: "Smooth animations out of the box." },
    { title: "Accessible", desc: "WCAG-compliant & keyboard navigable." },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Why Glide UI?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
