// ✅ CORRECT — use @/ alias (works from anywhere in the project)
import Navbar       from '@/app/components/Navbar'
import Hero         from '@/app/components/Hero'
import TechMarquee  from '@/app/components/TechMarquee'
import Services     from '@/app/components/Services'
import WhyUs        from '@/app/components/WhyUs'
import Work         from '@/app/components/Work'
import TechStack    from '@/app/components/TechSack'
import Team         from '@/app/components/Team'
import Testimonials from '@/app/components/Testimonials'
import Contact      from '@/app/components/Contact'
import Footer       from '@/app/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <WhyUs />
      {/* <Work /> */}
      <TechStack />
     {/* <Team /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}