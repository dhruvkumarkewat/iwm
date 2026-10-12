import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Founder from './components/Founder'
import Services from './components/Services'
import Campaigns from './components/Campaigns'
import Creators from './components/Creators'
import Team from './components/Team'
import Process from './components/Process'
import Brands from './components/Brands'
import Performance from './components/Performance'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

import StorytellerHUD from './components/StorytellerHUD'

export default function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document
      .querySelectorAll('.reveal, .reveal-3d, .reveal-img')
      .forEach((el) => io.observe(el))

    // Preloader fadeout
    const preloader = document.getElementById('preloader')
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hide')
      }, 600)
    }

    // Scroll progress bar indicator
    const progressTop = document.getElementById('progressTop')
    const handleScroll = () => {
      if (!progressTop) return
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        progressTop.style.width = `${progress}%`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="grain"></div>
      <div id="progressTop"></div>
      
      <div id="preloader">
        <div className="logo">IWM</div>
        <div style={{ fontSize: '10px', letterSpacing: '.3em', opacity: 0.6, marginTop: '4px' }}>
          INFLUENCER WEDS MARKETING
        </div>
        <div className="bar">
          <span id="loadFill" style={{ width: '100%' }}></span>
        </div>
      </div>

      <Header />
      <Hero />
      <About />
      <Founder />
      <Services />
      <Campaigns />
      <Creators />
      <Team />
      <Process />
      <Brands />
      <Performance />
      <Testimonials />
      <Contact />
      <Footer />
      <StorytellerHUD />
    </>
  )
}
