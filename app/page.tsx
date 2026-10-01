import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import WhyUs from '@/components/WhyUs'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <WhyUs />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}