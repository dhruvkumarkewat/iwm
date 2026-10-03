import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Campaigns from './components/Campaigns'
import Creators from './components/Creators'
import Process from './components/Process'
import Brands from './components/Brands'
import Performance from './components/Performance'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('in')
      })
    }, {threshold: .12})
    
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    // Preloader hide
    const preloader = document.getElementById('preloader')
    if(preloader) {
      setTimeout(() => {
        preloader.classList.add('hide')
      }, 800)
    }
  }, [])

  return (
    <>
      <div className="grain"></div>
      <div id="progressTop"></div>
      <div id="preloader">
        <div className="logo">IWM</div>
        <div style={{fontSize:'10px',letterSpacing:'.3em',opacity:.6}}>INFLUENCER WEDS MARKETING</div>
        <div className="bar"><span id="loadFill" style={{width:'100%'}}></span></div>
      </div>
      
      <Header />
      <Hero />
      <About />
      <Services />
      <Campaigns />
      <Creators />
      <Process />
      <Brands />
      <Performance />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
