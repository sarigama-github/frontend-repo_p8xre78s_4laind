import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">Portfolio</h2>
        {loading ? (
          <p className="text-gray-500">Loading projects…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((pr) => (
              <article key={pr._id} className="group rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-[4/3] bg-gray-100">
                  {pr.hero_image ? (
                    <img src={pr.hero_image} alt={pr.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-gray-400">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{pr.service}</div>
                  <h3 className="font-semibold text-lg">{pr.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">{pr.summary}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
