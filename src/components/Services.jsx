import { Shirt, Car, Cpu } from 'lucide-react'

const services = [
  {
    icon: Shirt,
    title: 'Custom Apparel',
    desc: 'Performance wear, jerseys, embroidery, and heat-press branding for teams and brands.',
  },
  {
    icon: Car,
    title: 'Vehicle Customization',
    desc: 'Premium wraps, decals, paint protection, and motorsport livery design.',
  },
  {
    icon: Cpu,
    title: 'Personalized Gadgets',
    desc: 'Laser engraving, UV print, and branded tech accessories for corporate gifting.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">What We Do</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gray-900 text-white grid place-items-center">
                <s.icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
