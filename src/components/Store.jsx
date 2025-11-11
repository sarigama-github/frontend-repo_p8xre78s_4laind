import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Store() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="store" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Featured Products</h2>
          <a href="#" className="text-blue-600 hover:underline">View all</a>
        </div>
        {loading ? (
          <p className="text-gray-500">Loading products…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p._id} className="group rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-[4/3] bg-gray-100">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-gray-400">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{p.category}</div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-bold">${p.price?.toFixed?.(2) ?? p.price}</div>
                    <button className="px-3 py-1.5 text-sm rounded-md bg-gray-900 text-white hover:bg-black">Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
