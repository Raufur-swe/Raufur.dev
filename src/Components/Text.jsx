import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import _SplitText from 'gsap/SplitText'
import React, { useRef } from 'react'
gsap.registerPlugin(_SplitText, _ScrollTrigger)
const Text = () => {
    const textRef = useRef()
    const sectionRef = useRef()
    useGSAP(() => {
        // test spit
        const split = new _SplitText(textRef.current, {
  type: " words ,chars",
});
gsap.set(split.words, {
  whiteSpace: "nowrap",
});
gsap.set(split.chars, {
  opacity: 0.1,
  color: "#999",
});

gsap.to(split.chars, {
  opacity: 1,
  color: "#000",
  stagger: 0.03,
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top top",
    end: "+=2500",
    scrub: true,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
  },
});
    })
    return (
        <section
            ref={sectionRef}
            className=' w-full   min-h-screen flex items-center justify-center p-20 '>
            <p
                ref={textRef}
                className=" text-center text-2xl md:text-3xl lg:text-[55px] leading-relaxed text-white  "
            >
                I am a developer passionate about turning ideas into real digital experiences. I focus on building clean, efficient, and impactful solutions that blend creativity with functionality. Every project is a chance to learn, improve, and create something meaningful.
            </p>
        </section>
    )
}

export default Text