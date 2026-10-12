import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Nykaaland from './components/Nykaaland'
import Campaigns from './components/Campaigns'
import Founder from './components/Founder'
import Process from './components/Process'
import Services from './components/Services'
import Creators from './components/Creators'
import Brands from './components/Brands'
import Performance from './components/Performance'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

import StorytellerHUD from './components/StorytellerHUD'

export default function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations with generous margins and fallback
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
          }
        })
      },
      { threshold: 0.02, rootMargin: '100px 0px 100px 0px' }
    )

    const revealTargets = document.querySelectorAll('.reveal, .reveal-3d, .reveal-img')
    revealTargets.forEach((el) => io.observe(el))

    // Fallback check to guarantee all visible elements become active immediately
    const checkVisible = () => {
      revealTargets.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
          el.classList.add('in')
        }
      })
    }
    checkVisible()
    const t1 = setTimeout(checkVisible, 250)
    const t2 = setTimeout(checkVisible, 800)

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
      clearTimeout(t1)
      clearTimeout(t2)
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
      <Nykaaland />
      <Campaigns />
      <Founder />
      <Process />
      <Services />
      <Creators />
      <Brands />
      <Performance />
      <Testimonials />
      <Contact />
      <Footer />
      <StorytellerHUD />
    </>
  )
}
