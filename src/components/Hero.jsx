import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white text-xs uppercase tracking-widest mb-4">Automotive • Sports • Gadgets</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
              Custom Clothing, Vehicle Wraps, and Personalized Tech
            </h1>
            <p className="mt-4 md:mt-6 text-white/90 text-base md:text-lg max-w-2xl">
              We design, craft, and deliver high-energy brand experiences. From performance apparel to full vehicle transformations and laser-engraved gadgets.
            </p>
            <div className="mt-6 md:mt-8 flex gap-3 flex-wrap">
              <a href="#store" className="px-5 py-3 bg-white text-gray-900 rounded-md font-semibold shadow hover:shadow-lg transition">Shop Now</a>
              <a href="#portfolio" className="px-5 py-3 bg-black/50 text-white rounded-md font-semibold border border-white/30 hover:bg-black/60 transition">View Portfolio</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent" />
    </section>
  );
}
