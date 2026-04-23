import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/layout/WhatsAppButton'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { WhyUs } from './components/sections/WhyUs'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
