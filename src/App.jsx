import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Store from './components/Store'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Store />
        <Portfolio />
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-10">
            <div className="rounded-2xl bg-white border shadow-sm p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Get a Quote</h2>
              <p className="text-gray-600 mt-2">Tell us about your project and we’ll get back to you within 24 hours.</p>
              <form className="mt-6 grid md:grid-cols-2 gap-4">
                <input className="border rounded-lg px-4 py-3" placeholder="Name" />
                <input className="border rounded-lg px-4 py-3" placeholder="Email" />
                <input className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Project Type (apparel / vehicle / gadgets)" />
                <textarea className="border rounded-lg px-4 py-3 md:col-span-2" rows="4" placeholder="Tell us more about what you need" />
                <button type="button" className="mt-2 inline-flex w-fit px-5 py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-black">Request Quote</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-gray-400 bg-gray-950">
        © {new Date().getFullYear()} Custom Creations Co. All rights reserved.
      </footer>
    </div>
  )
}

export default App
