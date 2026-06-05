import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)
const lenis  = new Lenis({
  duration : 1.2,
  smoothWheel : true,
  autoRaf: false,
})
lenis.on("scroll" ,ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time *1000)
})
gsap.ticker.lagSmoothing(0)
createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <App/>
 </BrowserRouter>,
)
