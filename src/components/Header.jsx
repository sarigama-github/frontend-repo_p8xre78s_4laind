import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-6 md:mt-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg text-white">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="font-extrabold tracking-tight text-xl md:text-2xl">Custom Creations Co.</a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#store" className="hover:text-white/90">Store</a>
              <a href="#services" className="hover:text-white/90">Services</a>
              <a href="#portfolio" className="hover:text-white/90">Portfolio</a>
              <a href="#contact" className="hover:text-white/90">Contact</a>
            </nav>
            <button className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20">
              <Menu size={18} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
